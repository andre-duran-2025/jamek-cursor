import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, FileText, Shield, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Painéis Elétricos', href: '/servicos#paineis' },
    { name: 'Esquemas Elétricos', href: '/servicos#esquemas' },
    { name: 'Retrofit Industrial', href: '/servicos#retrofit' },
    { name: 'Programação CLP', href: '/servicos#clp' },
    { name: 'Células Robóticas', href: '/servicos#roboticas' },
    { name: 'Software de Monitoramento', href: '/software' },
  ]

  const company = [
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Cases de Sucesso', href: '/cases' },
    { name: 'Política de Privacidade', href: '/privacidade' },
    { name: 'Termos de Uso', href: '/termos' },
  ]

  const contactInfo = [
    {
      icon: Phone,
      text: '(11) 3456-7890',
      href: 'tel:+551134567890',
      description: 'Telefone'
    },
    {
      icon: Mail,
      text: 'contato@jamek.com.br',
      href: 'mailto:contato@jamek.com.br',
      description: 'Email'
    },
    {
      icon: MapPin,
      text: 'Rua da Automação, 123 - São Paulo - SP',
      href: '#',
      description: 'Endereço'
    },
    {
      icon: Clock,
      text: 'Seg-Sex: 8h às 18h',
      href: '#',
      description: 'Horário'
    }
  ]

  const certifications = [
    { icon: Shield, text: 'ISO 9001:2015' },
    { icon: Users, text: 'Equipe Certificada' },
    { icon: Award, text: '10+ Anos de Experiência' },
    { icon: FileText, text: 'Projetos Aprovados' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Jamek</h3>
                <p className="text-sm text-gray-400">Soluções Industriais</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Especialistas em automação industrial para pequenas e médias empresas. 
              Transformamos sua produção com tecnologia de ponta e suporte completo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <info.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">{info.description}</p>
                    <a 
                      href={info.href}
                      className="text-white hover:text-primary transition-colors"
                    >
                      {info.text}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3">
                <cert.icon className="w-6 h-6 text-primary" />
                <span className="text-sm text-gray-300">{cert.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">
              Pronto para transformar sua produção?
            </h3>
            <p className="text-gray-300 mb-6">
              Solicite um orçamento gratuito e descubra como podemos otimizar seus processos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contato">
                  Solicitar Orçamento
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/cases">
                  Ver Cases de Sucesso
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Jamek Soluções Industriais. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacidade" className="hover:text-white transition-colors">
                Privacidade
              </Link>
              <Link href="/termos" className="hover:text-white transition-colors">
                Termos
              </Link>
              <span>CNPJ: 12.345.678/0001-90</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer