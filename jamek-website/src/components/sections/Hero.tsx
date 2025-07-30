'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  ArrowRight, 
  CheckCircle, 
  Play, 
  Zap, 
  Shield, 
  TrendingUp,
  Phone,
  Mail,
  Clock
} from 'lucide-react'
import { AnimatedCounter } from '@/components/common/AnimatedCounter'

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const benefits = [
    {
      icon: Zap,
      title: 'Eficiência Operacional',
      description: 'Aumente a produtividade em até 40%'
    },
    {
      icon: Shield,
      title: 'Segurança Industrial',
      description: 'Reduza acidentes em 90%'
    },
    {
      icon: TrendingUp,
      title: 'ROI Garantido',
      description: 'Retorno do investimento em 12-18 meses'
    }
  ]

  const stats = [
    { value: 150, suffix: '+', label: 'Projetos Concluídos' },
    { value: 50, suffix: '+', label: 'Clientes Satisfeitos' },
    { value: 10, suffix: ' Anos', label: 'de Experiência' },
    { value: 24, suffix: 'h', label: 'Suporte Técnico' }
  ]

  const contactInfo = [
    {
      icon: Phone,
      text: '(11) 3456-7890',
      href: 'tel:+551134567890',
      description: 'Ligue Agora'
    },
    {
      icon: Mail,
      text: 'contato@jamek.com.br',
      href: 'mailto:contato@jamek.com.br',
      description: 'Envie um Email'
    },
    {
      icon: Clock,
      text: 'Orçamento em 24h',
      href: '/contato',
      description: 'Resposta Rápida'
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <Zap className="w-4 h-4 mr-2" />
              Especialistas em Automação Industrial
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transforme sua{' '}
                <span className="text-primary">produção</span>{' '}
                com automação industrial
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Especialistas em automação para pequenas e médias empresas. 
                Painéis elétricos, retrofit, programação CLP e software de monitoramento 
                que aumentam sua produtividade e reduzem custos.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid sm:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <benefit.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-4">
                <Link href="/contato">
                  Solicitar Orçamento Gratuito
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="text-lg px-8 py-4">
                <Link href="/cases">
                  Ver Cases de Sucesso
                </Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="group flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <info.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-gray-600">{info.description}</p>
                    <p className="font-medium text-gray-900">{info.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Stats & Video */}
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary">
                      <AnimatedCounter 
                        value={stat.value} 
                        suffix={stat.suffix}
                        duration={2000}
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Video/Image Placeholder */}
            <div className="relative aspect-video bg-gradient-to-br from-primary to-secondary rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors group"
                >
                  <Play className="w-8 h-8 text-primary ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900">Veja como funciona</h3>
                  <p className="text-sm text-gray-600">Demonstração de automação industrial</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <p className="text-sm">ISO 9001:2015</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <p className="text-sm">Garantia de 2 Anos</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="text-sm">ROI Garantido</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero