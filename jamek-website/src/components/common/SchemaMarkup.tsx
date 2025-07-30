import Script from 'next/script'

interface SchemaMarkupProps {
  type: 'organization' | 'service' | 'website' | 'breadcrumb' | 'faq' | 'article'
  data: Record<string, any>
}

const SchemaMarkup = ({ type, data }: SchemaMarkupProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type === 'organization' ? 'Organization' : 
             type === 'service' ? 'ProfessionalService' :
             type === 'website' ? 'WebSite' :
             type === 'breadcrumb' ? 'BreadcrumbList' :
             type === 'faq' ? 'FAQPage' :
             type === 'article' ? 'Article' : 'Thing',
    ...data
  }

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

export default SchemaMarkup