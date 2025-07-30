# Jamek Website

Website institucional da Jamek Soluções Industriais, especializada em automação industrial para pequenas e médias empresas.

## 📋 Sobre o Projeto

Este é o site institucional da Jamek, desenvolvido com foco em:
- Conversão de leads qualificados
- SEO otimizado
- Performance elevada
- Experiência do usuário moderna
- Conformidade com LGPD

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **Lucide React** - Ícones modernos
- **Google Analytics** - Análise de tráfego
- **reCAPTCHA v3** - Proteção contra spam

## 🏗️ Estrutura do Projeto

```
jamek-website/
├── src/
│   ├── app/                 # App Router (Next.js 13+)
│   │   ├── page.tsx         # Página inicial
│   │   ├── layout.tsx       # Layout raiz
│   │   ├── globals.css      # Estilos globais
│   │   ├── sobre/           # Página sobre
│   │   ├── servicos/        # Página de serviços
│   │   ├── cases/           # Cases de sucesso
│   │   ├── software/        # Software proprietário
│   │   ├── contato/         # Página de contato
│   │   └── api/             # API Routes
│   ├── components/          # Componentes reutilizáveis
│   │   ├── common/          # Componentes comuns
│   │   ├── forms/           # Formulários
│   │   ├── layout/          # Header, Footer
│   │   ├── sections/        # Seções da homepage
│   │   └── ui/              # Componentes de UI base
│   ├── lib/                 # Utilitários e configurações
│   ├── hooks/               # React Hooks customizados
│   └── types/               # Definições TypeScript
├── public/                  # Arquivos estáticos
└── docs/                    # Documentação
```

## 🎯 Funcionalidades Principais

### Homepage
- Hero section com proposta de valor clara
- Preview dos principais serviços
- Cases de sucesso em destaque
- Software proprietário em evidência
- Formulário de captura de leads
- Call-to-actions estratégicos

### Páginas de Serviços
- **Painéis Elétricos**: Desenvolvimento e montagem personalizada
- **Esquemas Elétricos**: Diagramas técnicos profissionais
- **Retrofit Industrial**: Modernização de equipamentos
- **Programação CLP**: Software para controladores
- **Células Robóticas**: Automação com robôs industriais

### Software de Monitoramento
- Dashboard em tempo real
- Alertas preventivos
- Relatórios automáticos
- Acesso mobile
- Integração com CLPs

### Cases de Sucesso
- Resultados mensuráveis
- ROI comprovado
- Depoimentos de clientes
- Galeria de projetos

## 🔧 Instalação e Execução

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/andre-duran-2025/jamek-cursor.git

# Entre no diretório
cd jamek-cursor/jamek-website

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
```

### Configuração de Ambiente

Crie um arquivo `.env.local` com:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key

# Email (para formulários)
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password

# URLs
NEXT_PUBLIC_SITE_URL=https://jamek.com.br
```

### Execução

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start

# Análise do bundle
npm run analyze
```

## 📊 Performance e SEO

### Otimizações Implementadas
- ✅ **Core Web Vitals** otimizados
- ✅ **SSR/SSG** para SEO
- ✅ **Lazy loading** de imagens
- ✅ **Compressão** de assets
- ✅ **Minificação** CSS/JS
- ✅ **Schema markup** estruturado
- ✅ **Sitemap** automático
- ✅ **Robots.txt** configurado

### Metas de Performance
- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🛡️ Segurança e Compliance

### LGPD Compliance
- ✅ Política de privacidade completa
- ✅ Banner de cookies configurável
- ✅ Gerenciamento de consentimento
- ✅ Direitos do titular implementados

### Segurança
- ✅ Headers de segurança configurados
- ✅ reCAPTCHA v3 nos formulários
- ✅ Rate limiting nas APIs
- ✅ Validação de entrada rigorosa
- ✅ HTTPS obrigatório

## 📝 Formulários e Leads

### Tipos de Formulário
1. **Formulário de Contato** - Página dedicada
2. **Lead Form** - Captura rápida na homepage
3. **Orçamento Personalizado** - Serviços específicos

### Campos Coletados
- Nome completo
- Email corporativo
- Telefone/WhatsApp
- Empresa
- Cargo
- Tipo de serviço
- Descrição do projeto
- Orçamento estimado

### Integrações
- ✅ reCAPTCHA v3
- ✅ Google Analytics eventos
- ✅ Email notifications
- 🔄 CRM integration (futuro)
- 🔄 WhatsApp API (futuro)

## 🎨 Design System

### Cores Principais
```css
--primary: #2563eb;    /* Azul confiança */
--secondary: #16a34a;  /* Verde sucesso */
--accent: #dc2626;     /* Vermelho urgência */
--gray: #6b7280;       /* Texto secundário */
```

### Tipografia
- **Headings**: Inter (700, 600)
- **Body**: Inter (400, 500)
- **Code**: JetBrains Mono

### Componentes
- Buttons com variants
- Cards padronizados
- Forms validados
- Modals responsivos
- Icons lucide-react

## 📱 Responsividade

### Breakpoints
- **sm**: 640px (Mobile landscape)
- **md**: 768px (Tablet portrait)
- **lg**: 1024px (Tablet landscape)
- **xl**: 1280px (Desktop)
- **2xl**: 1536px (Large desktop)

### Testes
- ✅ Mobile first design
- ✅ Touch-friendly interfaces
- ✅ Cross-browser compatibility
- ✅ Accessibility (WCAG 2.1)

## 🚀 Deploy e Hosting

### Opções Recomendadas
1. **Vercel** (recomendado)
   - Deploy automático
   - Edge functions
   - Analytics integrado
   
2. **Netlify**
   - Build automático
   - Forms handling
   - CDN global
   
3. **AWS Amplify**
   - Integração AWS
   - CI/CD completo
   - Escalabilidade

### Configuração de Deploy
```bash
# Vercel
npx vercel

# Netlify
netlify deploy --build

# Docker
docker build -t jamek-website .
docker run -p 3000:3000 jamek-website
```

## 📈 Analytics e Monitoramento

### Métricas Principais
- **Conversão de leads**
- **Tempo na página**
- **Taxa de rejeição**
- **Origens de tráfego**
- **Performance Core Web Vitals**

### Eventos Trackados
- Form submissions
- CTA clicks
- Page views
- Download actions
- Contact attempts

## 🔄 Atualizações e Manutenção

### Roadmap
- [ ] Integração com CRM
- [ ] Chat ao vivo
- [ ] Blog/Artigos técnicos
- [ ] Portal do cliente
- [ ] Multi-idioma (EN/ES)
- [ ] PWA capabilities

### Versionamento
Seguimos [Semantic Versioning](https://semver.org/)
- **MAJOR**: Mudanças incompatíveis
- **MINOR**: Novas funcionalidades
- **PATCH**: Bug fixes

## 👥 Contribuição

Para contribuir:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

**Jamek Soluções Industriais**
- 📧 Email: contato@jamek.com.br
- 📱 WhatsApp: (11) 99999-9999
- 🌐 Website: https://jamek.com.br
- 📍 Endereço: Rua da Automação, 123 - São Paulo - SP

## 📄 Licença

Este projeto é propriedade da Jamek Soluções Industriais. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para impulsionar a automação industrial no Brasil**