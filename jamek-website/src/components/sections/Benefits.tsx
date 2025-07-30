import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Clock, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Aumento da Produtividade',
      description: 'Automatize processos repetitivos e aumente sua produção em até 40% com sistemas inteligentes.',
      features: ['Redução de tempo de ciclo', 'Menos paradas não programadas', 'Maior consistência na qualidade']
    },
    {
      icon: Shield,
      title: 'Segurança Industrial',
      description: 'Proteja seus colaboradores e equipamentos com sistemas de segurança avançados.',
      features: ['Redução de 90% nos acidentes', 'Monitoramento em tempo real', 'Conformidade com normas']
    },
    {
      icon: TrendingUp,
      title: 'ROI Garantido',
      description: 'Investimento que se paga rapidamente com economia de energia e aumento de eficiência.',
      features: ['Retorno em 12-18 meses', 'Economia de até 30% em energia', 'Redução de custos operacionais']
    },
    {
      icon: Clock,
      title: 'Suporte 24/7',
      description: 'Equipe técnica especializada disponível para suporte e manutenção preventiva.',
      features: ['Monitoramento remoto', 'Manutenção preventiva', 'Resposta rápida a emergências']
    },
    {
      icon: Users,
      title: 'Equipe Certificada',
      description: 'Profissionais com certificações internacionais e vasta experiência no mercado.',
      features: ['Engenheiros certificados', 'Técnicos especializados', 'Atualização constante']
    },
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Todos os projetos seguem rigorosos padrões de qualidade e normas técnicas.',
      features: ['ISO 9001:2015', 'Garantia de 2 anos', 'Documentação completa']
    }
  ]

  const stats = [
    { value: '40%', label: 'Aumento médio na produtividade' },
    { value: '90%', label: 'Redução de acidentes industriais' },
    { value: '12-18', label: 'Meses para ROI' },
    { value: '24/7', label: 'Suporte técnico disponível' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a Jamek?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Especialistas em automação industrial com foco em resultados mensuráveis 
            e suporte completo para pequenas e médias empresas.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Resultados que falam por si
            </h3>
            <p className="text-white/90 text-lg">
              Números que comprovam nossa eficiência e compromisso com resultados
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <p className="text-white/80 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Pronto para transformar sua produção?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Solicite um orçamento gratuito e descubra como podemos otimizar 
              seus processos industriais com tecnologia de ponta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits