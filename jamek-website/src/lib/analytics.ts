// Google Analytics Event Tracking
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Form submission tracking
export const trackFormSubmission = (formName: string, formType: string) => {
  trackEvent('form_submit', 'engagement', `${formName}_${formType}`)
}

// CTA click tracking
export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent('cta_click', 'engagement', `${ctaName}_${location}`)
}

// Page view tracking
export const trackPageView = (pageName: string) => {
  trackEvent('page_view', 'navigation', pageName)
}

// Contact method tracking
export const trackContactMethod = (method: string, location: string) => {
  trackEvent('contact_method', 'engagement', `${method}_${location}`)
}

// Service interest tracking
export const trackServiceInterest = (serviceName: string, location: string) => {
  trackEvent('service_interest', 'engagement', `${serviceName}_${location}`)
}

// Download tracking
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('file_download', 'engagement', `${fileName}_${fileType}`)
}

// Video interaction tracking
export const trackVideoInteraction = (videoName: string, action: string) => {
  trackEvent('video_interaction', 'engagement', `${videoName}_${action}`)
}

// Scroll depth tracking
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', 'engagement', `depth_${depth}`, depth)
}

// Time on page tracking
export const trackTimeOnPage = (pageName: string, timeInSeconds: number) => {
  trackEvent('time_on_page', 'engagement', pageName, timeInSeconds)
}

// Error tracking
export const trackError = (errorType: string, errorMessage: string) => {
  trackEvent('error', 'error', `${errorType}_${errorMessage}`)
}

// Conversion tracking
export const trackConversion = (conversionType: string, value?: number) => {
  trackEvent('conversion', 'conversion', conversionType, value)
}

// Custom dimension tracking
export const trackCustomDimension = (
  dimensionName: string,
  dimensionValue: string
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
      custom_map: {
        [dimensionName]: dimensionValue,
      },
    })
  }
}

// E-commerce tracking
export const trackPurchase = (
  transactionId: string,
  value: number,
  currency: string = 'BRL'
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
    })
  }
}

// Enhanced e-commerce tracking
export const trackAddToCart = (
  productId: string,
  productName: string,
  value: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'add_to_cart', {
      items: [
        {
          item_id: productId,
          item_name: productName,
          price: value,
          currency: 'BRL',
        },
      ],
    })
  }
}

// User engagement tracking
export const trackUserEngagement = (
  engagementType: string,
  engagementValue: string
) => {
  trackEvent('user_engagement', 'engagement', `${engagementType}_${engagementValue}`)
}

// Performance tracking
export const trackPerformance = (
  metricName: string,
  metricValue: number
) => {
  trackEvent('performance', 'performance', metricName, metricValue)
}

// A/B test tracking
export const trackABTest = (
  testName: string,
  variant: string,
  conversion: boolean = false
) => {
  trackEvent(
    conversion ? 'ab_test_conversion' : 'ab_test_view',
    'ab_testing',
    `${testName}_${variant}`
  )
}

// Social media tracking
export const trackSocialShare = (
  platform: string,
  contentUrl: string
) => {
  trackEvent('social_share', 'social', `${platform}_${contentUrl}`)
}

// Search tracking
export const trackSearch = (
  searchTerm: string,
  resultsCount: number
) => {
  trackEvent('search', 'search', searchTerm, resultsCount)
}

// Newsletter subscription tracking
export const trackNewsletterSubscription = (source: string) => {
  trackEvent('newsletter_subscription', 'engagement', source)
}

// Lead generation tracking
export const trackLeadGeneration = (
  leadType: string,
  leadSource: string,
  leadValue?: number
) => {
  trackEvent('lead_generation', 'conversion', `${leadType}_${leadSource}`, leadValue)
}

// Service inquiry tracking
export const trackServiceInquiry = (
  serviceName: string,
  inquiryType: string
) => {
  trackEvent('service_inquiry', 'engagement', `${serviceName}_${inquiryType}`)
}

// Quote request tracking
export const trackQuoteRequest = (
  serviceType: string,
  budgetRange: string
) => {
  trackEvent('quote_request', 'conversion', `${serviceType}_${budgetRange}`)
}

// Case study view tracking
export const trackCaseStudyView = (caseName: string) => {
  trackEvent('case_study_view', 'engagement', caseName)
}

// Software demo tracking
export const trackSoftwareDemo = (softwareName: string, action: string) => {
  trackEvent('software_demo', 'engagement', `${softwareName}_${action}`)
}

// Support request tracking
export const trackSupportRequest = (
  supportType: string,
  priority: string
) => {
  trackEvent('support_request', 'engagement', `${supportType}_${priority}`)
}

// Maintenance request tracking
export const trackMaintenanceRequest = (
  maintenanceType: string,
  urgency: string
) => {
  trackEvent('maintenance_request', 'engagement', `${maintenanceType}_${urgency}`)
}

// Training request tracking
export const trackTrainingRequest = (
  trainingType: string,
  participantCount: number
) => {
  trackEvent('training_request', 'engagement', `${trainingType}_${participantCount}`)
}

// Equipment specification tracking
export const trackEquipmentSpec = (
  equipmentType: string,
  specifications: string
) => {
  trackEvent('equipment_spec', 'engagement', `${equipmentType}_${specifications}`)
}

// ROI calculator tracking
export const trackROICalculator = (
  industry: string,
  estimatedROI: number
) => {
  trackEvent('roi_calculator', 'engagement', industry, estimatedROI)
}

// Resource download tracking
export const trackResourceDownload = (
  resourceType: string,
  resourceName: string
) => {
  trackEvent('resource_download', 'engagement', `${resourceType}_${resourceName}`)
}

// Webinar registration tracking
export const trackWebinarRegistration = (
  webinarName: string,
  registrationSource: string
) => {
  trackEvent('webinar_registration', 'engagement', `${webinarName}_${registrationSource}`)
}

// Consultation booking tracking
export const trackConsultationBooking = (
  consultationType: string,
  preferredDate: string
) => {
  trackEvent('consultation_booking', 'conversion', `${consultationType}_${preferredDate}`)
}

// Equipment quote tracking
export const trackEquipmentQuote = (
  equipmentType: string,
  estimatedValue: number
) => {
  trackEvent('equipment_quote', 'conversion', equipmentType, estimatedValue)
}

// Service comparison tracking
export const trackServiceComparison = (
  services: string[],
  comparisonSource: string
) => {
  trackEvent('service_comparison', 'engagement', `${services.join('_vs_')}_${comparisonSource}`)
}

// Industry-specific tracking
export const trackIndustryInterest = (
  industry: string,
  interestLevel: string
) => {
  trackEvent('industry_interest', 'engagement', `${industry}_${interestLevel}`)
}

// Technology interest tracking
export const trackTechnologyInterest = (
  technology: string,
  application: string
) => {
  trackEvent('technology_interest', 'engagement', `${technology}_${application}`)
}

// Compliance tracking
export const trackComplianceInterest = (
  complianceType: string,
  industry: string
) => {
  trackEvent('compliance_interest', 'engagement', `${complianceType}_${industry}`)
}

// Sustainability tracking
export const trackSustainabilityInterest = (
  sustainabilityAspect: string,
  implementationPhase: string
) => {
  trackEvent('sustainability_interest', 'engagement', `${sustainabilityAspect}_${implementationPhase}`)
}