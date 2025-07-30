import { NextRequest, NextResponse } from 'next/server'

interface RateLimitConfig {
  windowMs: number
  maxRequests: number
  message?: string
  statusCode?: number
}

interface RateLimitStore {
  [key: string]: {
    count: number
    resetTime: number
  }
}

// In-memory store for rate limiting
// In production, use Redis or similar
const store: RateLimitStore = {}

export class RateLimiter {
  private config: RateLimitConfig

  constructor(config: RateLimitConfig) {
    this.config = {
      windowMs: 15 * 60 * 1000, // 15 minutes default
      maxRequests: 100, // 100 requests per window default
      message: 'Too many requests, please try again later.',
      statusCode: 429,
      ...config,
    }
  }

  private getKey(req: NextRequest): string {
    // Use IP address as key
    const forwarded = req.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : req.ip || 'unknown'
    return `rate_limit:${ip}`
  }

  private isExpired(entry: { count: number; resetTime: number }): boolean {
    return Date.now() > entry.resetTime
  }

  private createEntry(): { count: number; resetTime: number } {
    return {
      count: 0,
      resetTime: Date.now() + this.config.windowMs,
    }
  }

  public check(req: NextRequest): { allowed: boolean; remaining: number; resetTime: number } {
    const key = this.getKey(req)
    const now = Date.now()

    // Get or create entry
    let entry = store[key]
    if (!entry || this.isExpired(entry)) {
      entry = this.createEntry()
      store[key] = entry
    }

    // Check if limit exceeded
    const allowed = entry.count < this.config.maxRequests
    const remaining = Math.max(0, this.config.maxRequests - entry.count)

    // Increment counter
    entry.count++

    return {
      allowed,
      remaining,
      resetTime: entry.resetTime,
    }
  }

  public middleware() {
    return (req: NextRequest) => {
      const result = this.check(req)

      if (!result.allowed) {
        return NextResponse.json(
          { error: this.config.message },
          { status: this.config.statusCode }
        )
      }

      // Add rate limit headers
      const response = NextResponse.next()
      response.headers.set('X-RateLimit-Limit', this.config.maxRequests.toString())
      response.headers.set('X-RateLimit-Remaining', result.remaining.toString())
      response.headers.set('X-RateLimit-Reset', result.resetTime.toString())

      return response
    }
  }
}

// Pre-configured rate limiters for different use cases
export const rateLimiters = {
  // General API rate limiting
  api: new RateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 100,
    message: 'API rate limit exceeded. Please try again later.',
  }),

  // Form submission rate limiting
  forms: new RateLimiter({
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 10,
    message: 'Too many form submissions. Please try again later.',
  }),

  // Contact form specific
  contact: new RateLimiter({
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 5,
    message: 'Too many contact form submissions. Please try again later.',
  }),

  // Quote requests
  quotes: new RateLimiter({
    windowMs: 24 * 60 * 60 * 1000, // 24 hours
    maxRequests: 3,
    message: 'Too many quote requests. Please try again tomorrow.',
  }),

  // Newsletter subscriptions
  newsletter: new RateLimiter({
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 3,
    message: 'Too many newsletter subscription attempts. Please try again later.',
  }),

  // File uploads
  uploads: new RateLimiter({
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 10,
    message: 'Too many file uploads. Please try again later.',
  }),

  // Authentication attempts
  auth: new RateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 5,
    message: 'Too many authentication attempts. Please try again later.',
  }),

  // Search requests
  search: new RateLimiter({
    windowMs: 5 * 60 * 1000, // 5 minutes
    maxRequests: 20,
    message: 'Too many search requests. Please try again later.',
  }),
}

// Utility function to check rate limit and return appropriate response
export function checkRateLimit(
  req: NextRequest,
  type: keyof typeof rateLimiters = 'api'
): { allowed: boolean; response?: NextResponse } {
  const limiter = rateLimiters[type]
  const result = limiter.check(req)

  if (!result.allowed) {
    return {
      allowed: false,
      response: NextResponse.json(
        { error: limiter['config'].message },
        { status: limiter['config'].statusCode }
      ),
    }
  }

  return { allowed: true }
}

// Middleware function for Next.js API routes
export function withRateLimit(
  handler: (req: NextRequest) => Promise<NextResponse>,
  type: keyof typeof rateLimiters = 'api'
) {
  return async (req: NextRequest) => {
    const { allowed, response } = checkRateLimit(req, type)
    
    if (!allowed) {
      return response!
    }

    return handler(req)
  }
}

// Clean up expired entries periodically
export function cleanupRateLimitStore() {
  const now = Date.now()
  Object.keys(store).forEach(key => {
    if (store[key] && now > store[key].resetTime) {
      delete store[key]
    }
  })
}

// Run cleanup every 5 minutes
if (typeof window === 'undefined') {
  setInterval(cleanupRateLimitStore, 5 * 60 * 1000)
}

// Export types for TypeScript
export type { RateLimitConfig, RateLimitStore }