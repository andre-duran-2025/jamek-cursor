'use client'

import { useState, useEffect } from 'react'

export interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

const COOKIE_CONSENT_KEY = 'jamek_cookie_consent'
const COOKIE_PREFERENCES_KEY = 'jamek_cookie_preferences'

export const useCookieConsent = () => {
  const [hasConsented, setHasConsented] = useState<boolean | null>(null)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
    functional: false,
  })
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check for existing consent on mount
    const existingConsent = localStorage.getItem(COOKIE_CONSENT_KEY)
    const existingPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY)

    if (existingConsent === 'true' && existingPreferences) {
      try {
        const parsedPreferences = JSON.parse(existingPreferences)
        setPreferences(parsedPreferences)
        setHasConsented(true)
        setShowBanner(false)
      } catch {
        // Invalid stored preferences, reset
        setHasConsented(false)
        setShowBanner(true)
      }
    } else {
      setHasConsented(false)
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    }
    
    setPreferences(allAccepted)
    setHasConsented(true)
    setShowBanner(false)
    
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true')
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(allAccepted))
    
    // Trigger analytics if accepted
    if (allAccepted.analytics && typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        functionality_storage: 'granted',
      })
    }
  }

  const acceptNecessary = () => {
    const necessaryOnly: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    }
    
    setPreferences(necessaryOnly)
    setHasConsented(true)
    setShowBanner(false)
    
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true')
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(necessaryOnly))
    
    // Revoke analytics consent
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        functionality_storage: 'denied',
      })
    }
  }

  const updatePreferences = (newPreferences: Partial<CookiePreferences>) => {
    const updatedPreferences = { ...preferences, ...newPreferences }
    setPreferences(updatedPreferences)
    
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(updatedPreferences))
    
    // Update analytics consent based on preferences
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: updatedPreferences.analytics ? 'granted' : 'denied',
        ad_storage: updatedPreferences.marketing ? 'granted' : 'denied',
        functionality_storage: updatedPreferences.functional ? 'granted' : 'denied',
      })
    }
  }

  const revokeConsent = () => {
    setHasConsented(false)
    setShowBanner(true)
    
    localStorage.removeItem(COOKIE_CONSENT_KEY)
    localStorage.removeItem(COOKIE_PREFERENCES_KEY)
    
    // Revoke all consent
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        functionality_storage: 'denied',
      })
    }
  }

  const getConsentStatus = () => {
    return {
      hasConsented,
      preferences,
      showBanner,
    }
  }

  return {
    hasConsented,
    preferences,
    showBanner,
    acceptAll,
    acceptNecessary,
    updatePreferences,
    revokeConsent,
    getConsentStatus,
  }
}