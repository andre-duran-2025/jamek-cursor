import { z } from "zod"

// Service types for forms
export const serviceTypes = [
  "Painéis Elétricos",
  "Esquemas Elétricos", 
  "Retrofit Industrial",
  "Programação CLP",
  "Células Robóticas",
  "Software de Monitoramento",
  "Consultoria em Automação",
  "Manutenção Preventiva",
  "Outro"
] as const

// Budget ranges for estimation
export const budgetRanges = [
  "Até R$ 50.000",
  "R$ 50.000 - R$ 100.000",
  "R$ 100.000 - R$ 250.000", 
  "R$ 250.000 - R$ 500.000",
  "Acima de R$ 500.000",
  "Prefiro não informar"
] as const

// Company sizes
export const companySizes = [
  "Micro (até 9 funcionários)",
  "Pequena (10-49 funcionários)", 
  "Média (50-249 funcionários)",
  "Grande (250+ funcionários)"
] as const

// Brazilian phone number validation
const phoneRegex = /^(\+55\s?)?(\(?\d{2}\)?\s?)?(\d{4,5}[-\s]?\d{4})$/

// CNPJ validation regex (basic format check)
const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$|^\d{14}$/

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras e espaços"),
  
  email: z
    .string()
    .min(1, "Email é obrigatório")
    .email("Email deve ser válido")
    .max(255, "Email deve ter no máximo 255 caracteres")
    .toLowerCase(),
  
  phone: z
    .string()
    .min(1, "Telefone é obrigatório")
    .regex(phoneRegex, "Telefone deve ser válido (ex: (11) 99999-9999)"),
  
  company: z
    .string()
    .min(2, "Nome da empresa deve ter pelo menos 2 caracteres")
    .max(200, "Nome da empresa deve ter no máximo 200 caracteres"),
  
  position: z
    .string()
    .max(100, "Cargo deve ter no máximo 100 caracteres")
    .optional(),
  
  serviceType: z
    .enum(serviceTypes, {
      required_error: "Selecione um tipo de serviço",
      invalid_type_error: "Tipo de serviço inválido"
    }),
  
  projectDescription: z
    .string()
    .min(10, "Descrição deve ter pelo menos 10 caracteres")
    .max(2000, "Descrição deve ter no máximo 2000 caracteres"),
  
  budgetRange: z
    .enum(budgetRanges)
    .optional(),
  
  companySize: z
    .enum(companySizes)
    .optional(),
  
  urgency: z
    .enum(["baixa", "média", "alta", "crítica"])
    .default("média")
    .optional(),
  
  acceptTerms: z
    .boolean()
    .refine(val => val === true, {
      message: "Você deve aceitar os termos de privacidade"
    }),
  
  acceptMarketing: z
    .boolean()
    .default(false)
    .optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Lead Form Schema (simplified version)
export const leadFormSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras e espaços"),
  
  email: z
    .string()
    .min(1, "Email é obrigatório")
    .email("Email deve ser válido")
    .max(255, "Email deve ter no máximo 255 caracteres")
    .toLowerCase(),
  
  phone: z
    .string()
    .min(1, "Telefone é obrigatório")
    .regex(phoneRegex, "Telefone deve ser válido (ex: (11) 99999-9999)"),
  
  company: z
    .string()
    .min(2, "Nome da empresa deve ter pelo menos 2 caracteres")
    .max(200, "Nome da empresa deve ter no máximo 200 caracteres"),
  
  serviceType: z
    .enum(serviceTypes)
    .optional(),
})

export type LeadFormData = z.infer<typeof leadFormSchema>

// Newsletter subscription schema
export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, "Email é obrigatório")
    .email("Email deve ser válido")
    .max(255, "Email deve ter no máximo 255 caracteres")
    .toLowerCase(),
  
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres")
    .optional(),
  
  interests: z
    .array(z.enum(serviceTypes))
    .optional(),
})

export type NewsletterData = z.infer<typeof newsletterSchema>

// Quote request schema (more detailed)
export const quoteRequestSchema = z.object({
  // Personal Information
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  
  email: z
    .string()
    .min(1, "Email é obrigatório")
    .email("Email deve ser válido")
    .max(255, "Email deve ter no máximo 255 caracteres")
    .toLowerCase(),
  
  phone: z
    .string()
    .min(1, "Telefone é obrigatório")
    .regex(phoneRegex, "Telefone deve ser válido"),
  
  // Company Information
  company: z
    .string()
    .min(2, "Nome da empresa deve ter pelo menos 2 caracteres")
    .max(200, "Nome da empresa deve ter no máximo 200 caracteres"),
  
  cnpj: z
    .string()
    .regex(cnpjRegex, "CNPJ deve ser válido")
    .optional(),
  
  position: z
    .string()
    .max(100, "Cargo deve ter no máximo 100 caracteres")
    .optional(),
  
  companySize: z
    .enum(companySizes)
    .optional(),
  
  // Project Details
  serviceType: z
    .enum(serviceTypes, {
      required_error: "Selecione um tipo de serviço"
    }),
  
  projectDescription: z
    .string()
    .min(20, "Descrição deve ter pelo menos 20 caracteres")
    .max(3000, "Descrição deve ter no máximo 3000 caracteres"),
  
  currentSituation: z
    .string()
    .max(1000, "Situação atual deve ter no máximo 1000 caracteres")
    .optional(),
  
  expectedResults: z
    .string()
    .max(1000, "Resultados esperados deve ter no máximo 1000 caracteres")
    .optional(),
  
  budgetRange: z
    .enum(budgetRanges, {
      required_error: "Selecione uma faixa de orçamento"
    }),
  
  timeline: z
    .enum(["imediato", "1-3_meses", "3-6_meses", "6-12_meses", "mais_12_meses"])
    .default("3-6_meses"),
  
  urgency: z
    .enum(["baixa", "média", "alta", "crítica"])
    .default("média"),
  
  // Additional Information
  hasExistingAutomation: z
    .boolean()
    .default(false),
  
  existingBrands: z
    .string()
    .max(500, "Marcas existentes deve ter no máximo 500 caracteres")
    .optional(),
  
  technicalRequirements: z
    .string()
    .max(1000, "Requisitos técnicos deve ter no máximo 1000 caracteres")
    .optional(),
  
  // Legal
  acceptTerms: z
    .boolean()
    .refine(val => val === true, {
      message: "Você deve aceitar os termos de privacidade"
    }),
  
  acceptMarketing: z
    .boolean()
    .default(false),
})

export type QuoteRequestData = z.infer<typeof quoteRequestSchema>

// Support/Contact form schema
export const supportFormSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  
  email: z
    .string()
    .min(1, "Email é obrigatório")
    .email("Email deve ser válido")
    .max(255, "Email deve ter no máximo 255 caracteres")
    .toLowerCase(),
  
  phone: z
    .string()
    .regex(phoneRegex, "Telefone deve ser válido")
    .optional(),
  
  subject: z
    .string()
    .min(5, "Assunto deve ter pelo menos 5 caracteres")
    .max(200, "Assunto deve ter no máximo 200 caracteres"),
  
  category: z
    .enum([
      "suporte_tecnico",
      "duvida_comercial", 
      "solicitacao_orcamento",
      "manutencao",
      "reclamacao",
      "sugestao",
      "outro"
    ], {
      required_error: "Selecione uma categoria"
    }),
  
  message: z
    .string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(2000, "Mensagem deve ter no máximo 2000 caracteres"),
  
  priority: z
    .enum(["baixa", "normal", "alta", "urgente"])
    .default("normal"),
  
  attachments: z
    .array(z.string())
    .max(5, "Máximo 5 anexos permitidos")
    .optional(),
})

export type SupportFormData = z.infer<typeof supportFormSchema>

// File upload validation
export const fileUploadSchema = z.object({
  file: z
    .instanceof(File)
    .refine(file => file.size <= 10 * 1024 * 1024, {
      message: "Arquivo deve ter no máximo 10MB"
    })
    .refine(file => {
      const allowedTypes = [
        'image/jpeg',
        'image/png', 
        'image/gif',
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      ]
      return allowedTypes.includes(file.type)
    }, {
      message: "Tipo de arquivo não permitido. Use: JPG, PNG, GIF, PDF, DOC, DOCX, XLS, XLSX"
    }),
  
  description: z
    .string()
    .max(200, "Descrição deve ter no máximo 200 caracteres")
    .optional(),
})

export type FileUploadData = z.infer<typeof fileUploadSchema>

// Search form schema
export const searchSchema = z.object({
  query: z
    .string()
    .min(1, "Digite algo para pesquisar")
    .max(100, "Pesquisa deve ter no máximo 100 caracteres"),
  
  category: z
    .enum(["todos", "servicos", "cases", "blog", "software"])
    .default("todos")
    .optional(),
  
  filters: z
    .array(z.string())
    .optional(),
})

export type SearchData = z.infer<typeof searchSchema>

// Cookie preferences schema
export const cookiePreferencesSchema = z.object({
  necessary: z
    .boolean()
    .default(true), // Always true, cannot be disabled
  
  analytics: z
    .boolean()
    .default(false),
  
  marketing: z
    .boolean()
    .default(false),
  
  functional: z
    .boolean()
    .default(false),
})

export type CookiePreferencesData = z.infer<typeof cookiePreferencesSchema>

// Validation helper functions
export const validateBrazilianPhone = (phone: string): boolean => {
  const cleaned = phone.replace(/\D/g, '')
  return cleaned.length === 10 || cleaned.length === 11
}

export const validateCNPJ = (cnpj: string): boolean => {
  const cleaned = cnpj.replace(/\D/g, '')
  
  if (cleaned.length !== 14) return false
  if (/^(\d)\1+$/.test(cleaned)) return false
  
  // Validate check digits
  let sum = 0
  let weight = 2
  
  for (let i = 11; i >= 0; i--) {
    sum += parseInt(cleaned[i]) * weight
    weight = weight === 9 ? 2 : weight + 1
  }
  
  const firstDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (firstDigit !== parseInt(cleaned[12])) return false
  
  sum = 0
  weight = 2
  
  for (let i = 12; i >= 0; i--) {
    sum += parseInt(cleaned[i]) * weight
    weight = weight === 9 ? 2 : weight + 1
  }
  
  const secondDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  return secondDigit === parseInt(cleaned[13])
}

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 10000) // Limit length
}

export const normalizeEmail = (email: string): string => {
  return email.toLowerCase().trim()
}

export const normalizePhone = (phone: string): string => {
  return phone.replace(/\D/g, '')
}