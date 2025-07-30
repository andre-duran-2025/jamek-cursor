# 🚀 Guia de Configuração - Jamek Website

Este guia irá ajudá-lo a configurar e executar o projeto Jamek Website em seu ambiente local.

## 📋 Pré-requisitos

### Software Necessário
- **Node.js** 18.0.0 ou superior
- **npm** 9.0.0 ou superior (ou yarn)
- **Git** para controle de versão

### Verificação de Versões
```bash
node --version  # Deve ser >= 18.0.0
npm --version   # Deve ser >= 9.0.0
git --version   # Qualquer versão recente
```

## 🛠️ Instalação

### 1. Clone o Repositório
```bash
git clone https://github.com/andre-duran-2025/jamek-cursor.git
cd jamek-cursor/jamek-website
```

### 2. Instale as Dependências
```bash
npm install
# ou
yarn install
```

### 3. Configure as Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# reCAPTCHA (opcional)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key

# Email (para formulários)
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password

# URLs
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Execute o Projeto
```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start
```

## 🌐 Acessando o Projeto

Após executar `npm run dev`, o projeto estará disponível em:
- **URL Local:** http://localhost:3000
- **URL de Rede:** http://seu-ip:3000

## 📁 Estrutura do Projeto

```
jamek-website/
├── src/
│   ├── app/                 # App Router (Next.js 13+)
│   │   ├── page.tsx         # Página inicial
│   │   ├── layout.tsx       # Layout raiz
│   │   ├── globals.css      # Estilos globais
│   │   ├── robots.ts        # Configuração SEO
│   │   ├── sitemap.ts       # Sitemap automático
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
├── docs/                    # Documentação
└── config files...
```

## 🔧 Configurações Avançadas

### TypeScript
O projeto usa TypeScript estrito. Para verificar tipos:
```bash
npm run type-check
```

### ESLint
Para verificar qualidade do código:
```bash
npm run lint
```

### Prettier
Para formatar código:
```bash
npm run format
```

### Análise de Bundle
Para analisar o tamanho do bundle:
```bash
npm run analyze
```

## 🎨 Personalização

### Cores e Tema
As cores principais estão definidas em `src/app/globals.css`:
```css
:root {
  --primary: 214 88% 56%;    /* Azul confiança */
  --secondary: 142 77% 47%;  /* Verde sucesso */
  --accent: 354 82% 48%;     /* Vermelho urgência */
}
```

### Componentes
Os componentes estão organizados por categoria:
- **UI:** Componentes base (Button, Card, Input)
- **Layout:** Header, Footer
- **Sections:** Seções da homepage
- **Forms:** Formulários de contato
- **Common:** Componentes utilitários

## 📊 Analytics e Monitoramento

### Google Analytics
1. Crie uma conta no Google Analytics
2. Obtenha o ID de medição (G-XXXXXXXXXX)
3. Adicione ao `.env.local`
4. Configure eventos personalizados em `src/lib/analytics.ts`

### reCAPTCHA
1. Acesse https://www.google.com/recaptcha
2. Crie um novo site
3. Adicione as chaves ao `.env.local`

## 🔒 Segurança

### Headers de Segurança
Configurados em `next.config.ts`:
- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer Policy

### Rate Limiting
Implementado em `src/lib/rateLimit.ts`:
- Proteção contra spam
- Limites por tipo de requisição
- Configuração flexível

## 📱 Responsividade

### Breakpoints
- **sm:** 640px (Mobile landscape)
- **md:** 768px (Tablet portrait)
- **lg:** 1024px (Tablet landscape)
- **xl:** 1280px (Desktop)
- **2xl:** 1536px (Large desktop)

### Testes
- Teste em diferentes dispositivos
- Use DevTools do navegador
- Verifique acessibilidade

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Netlify
1. Conecte ao repositório
2. Configure build settings
3. Adicione variáveis de ambiente

### AWS Amplify
1. Conecte ao repositório
2. Configure build settings
3. Configure domínio personalizado

## 🐛 Troubleshooting

### Problemas Comuns

#### Erro de Dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

#### Erro de TypeScript
```bash
npm run type-check
# Corrija os erros indicados
```

#### Erro de Build
```bash
npm run build
# Verifique os erros no console
```

#### Problemas de Performance
```bash
npm run analyze
# Otimize os componentes maiores
```

### Logs de Desenvolvimento
```bash
# Logs detalhados
DEBUG=* npm run dev

# Apenas erros
npm run dev 2>&1 | grep -i error
```

## 📚 Recursos Adicionais

### Documentação
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
- [React Hook Form](https://react-hook-form.com/docs)

### Ferramentas Úteis
- **VS Code Extensions:**
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript Importer

### Comunidade
- [Next.js Discord](https://discord.gg/nextjs)
- [Tailwind CSS Discord](https://discord.gg/tailwindcss)
- [TypeScript Community](https://discord.gg/typescript)

## 🤝 Contribuição

### Antes de Contribuir
1. Fork o repositório
2. Crie uma branch para sua feature
3. Siga as convenções de código
4. Teste suas mudanças
5. Abra um Pull Request

### Convenções de Código
- Use TypeScript estrito
- Siga o ESLint configurado
- Use Prettier para formatação
- Escreva testes quando possível
- Documente mudanças importantes

## 📞 Suporte

### Contato Técnico
- **Email:** dev@jamek.com.br
- **Issues:** [GitHub Issues](https://github.com/andre-duran-2025/jamek-cursor/issues)
- **Discord:** [Jamek Dev Community](https://discord.gg/jamek)

### Recursos de Ajuda
- [FAQ](https://jamek.com.br/faq)
- [Documentação](https://docs.jamek.com.br)
- [Tutoriais](https://jamek.com.br/tutoriais)

---

**Última atualização:** 30 de Julho de 2025
**Versão:** 1.0
**Próxima revisão:** 30 de Janeiro de 2026