import type { Metadata } from "next"
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Benefits from '@/components/sections/Benefits'
import ServicesPreview from '@/components/sections/ServicesPreview'
import SoftwareHighlight from '@/components/sections/SoftwareHighlight'
import CasesPreview from '@/components/sections/CasesPreview'
import FinalCTA from '@/components/sections/FinalCTA'
import SchemaMarkup from '@/components/common/SchemaMarkup'

export const metadata: Metadata = {
  title: "Jamek Soluções Industriais | Automação Industrial para Pequenas Empresas",
  description: "Transforme sua empresa com automação industrial acessível. Painéis elétricos, retrofit, programação CLP, células robóticas e software de monitoramento. Orçamento gratuito em 24h.",
  keywords: [
    "automação industrial",
    "painéis elétricos", 
    "retrofit industrial",
    "programação CLP",
    "células robóticas",
    "esquemas elétricos",
    "software monitoramento industrial",
    "jamek soluções industriais",
    "pequenas empresas",
    "indústria 4.0",
    "eficiência operacional",
    "redução de custos",
    "aumento produtividade"
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://jamek.com.br",
    title: "Jamek Soluções Industriais | Automação Industrial",
    description: "Transforme sua empresa com automação industrial acessível. Especialistas em painéis elétricos, retrofit e programação CLP para pequenas empresas.",
    siteName: "Jamek Soluções Industriais",
    images: [
      {
        url: "https://jamek.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jamek Soluções Industriais - Automação Industrial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamek Soluções Industriais | Automação Industrial",
    description: "Transforme sua empresa com automação industrial acessível.",
    images: ["https://jamek.com.br/og-image.jpg"],
  },
  alternates: {
    canonical: "https://jamek.com.br",
  },
}

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jamek Soluções Industriais",
    "description": "Empresa especializada em automação industrial para pequenas e médias empresas",
    "url": "https://jamek.com.br",
    "logo": "https://jamek.com.br/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/jamek-solucoes-industriais",
      "https://www.facebook.com/jameksolucoes",
      "https://www.instagram.com/jameksolucoes"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-3456-7890",
      "contactType": "customer service",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua da Automação, 123",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "postalCode": "01234-567",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-23.5505",
      "longitude": "-46.6333"
    },
    "foundingDate": "2014",
    "employee": [
      {
        "@type": "Person",
        "name": "André Machado",
        "jobTitle": "Diretor Técnico"
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Painéis Elétricos",
          "description": "Desenvolvimento e montagem de painéis elétricos personalizados"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Retrofit Industrial",
          "description": "Modernização de equipamentos industriais"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Programação CLP",
          "description": "Desenvolvimento de software para controladores lógicos programáveis"
        }
      }
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Jamek Soluções Industriais",
    "description": "Serviços completos de automação industrial",
    "provider": {
      "@type": "Organization",
      "name": "Jamek Soluções Industriais"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Automação Industrial",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Painéis Elétricos",
            "description": "Desenvolvimento e montagem de painéis elétricos personalizados"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Esquemas Elétricos",
            "description": "Criação de diagramas e esquemas elétricos detalhados"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Retrofit Industrial",
            "description": "Modernização de equipamentos existentes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Programação CLP",
            "description": "Desenvolvimento de software para controladores"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Células Robóticas",
            "description": "Implementação de células robotizadas"
          }
        }
      ]
    }
  }

  return (
    <>
      <SchemaMarkup type="organization" data={organizationSchema} />
      <SchemaMarkup type="service" data={serviceSchema} />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          <Hero />
          <Benefits />
          <ServicesPreview />
          <SoftwareHighlight />
          <CasesPreview />
          <FinalCTA />
        </main>

        <Footer />
      </div>
    </>
  )
}