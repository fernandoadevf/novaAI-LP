// Informações da empresa
export const COMPANY_INFO = {
  name: 'novaAI',
  email: 'ainova.adm@gmail.com',
  phone: '+55 47 8840-9869',
  instagram: '@novaai.oficial',
  slogan: 'Agência especializada em automações inteligentes'
} as const;

// Rotas/Navegação
export const ROUTES = {
  HOME: '#home',
  SERVICES: '#servicos', 
  FAQ: '/faq',
  CONTACT: '#contato'
} as const;

// Menu de navegação
export const MENU_ITEMS = [
  { name: 'Home', href: ROUTES.HOME },
  { name: 'Soluções Personalizadas', href: ROUTES.SERVICES },
  { name: 'Perguntas Frequentes', href: ROUTES.FAQ }
] as const;

// Configurações de animação
export const ANIMATION_CONFIG = {
  SPRING: {
    type: 'spring' as const,
    stiffness: 200,
    damping: 25,
    duration: 1.2
  },
  HOVER: {
    scale: 1.05,
    transition: { duration: 0.3 }
  },
  TAP: {
    scale: 0.95
  },
  FADE_IN: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }
} as const;

// Cores do projeto
export const COLORS = {
  PRIMARY: '#00E0B7',
  PRIMARY_HOVER: '#00D9A7',
  BACKGROUND: '#1a1a2e',
  BACKGROUND_GLASS: 'rgba(0, 0, 0, 0.2)',
  WHITE: '#ffffff',
  GRAY: {
    100: '#f7fafc',
    200: '#edf2f7',
    300: '#e2e8f0',
    700: '#4a5568',
    900: '#1a202c'
  }
} as const;

// Tamanhos e espaçamentos
export const SIZES = {
  NAVBAR_HEIGHT: 'h-14 lg:h-16',
  LOGO_SIZE: 'w-8 h-8',
  ICON_SIZES: {
    SM: 'w-4 h-4',
    MD: 'w-5 h-5',
    LG: 'w-6 h-6',
    XL: 'w-8 h-8'
  },
  CONTAINER: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'
} as const;

// Breakpoints responsivos
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px', 
  LG: '1024px',
  XL: '1280px'
} as const;

// Configurações de loading
export const LOADING_CONFIG = {
  DURATION: 3000, // 3 segundos
  PROGRESS_STEPS: 100
} as const;

// Textos estáticos
export const TEXTS = {
  LOADING: 'Carregando...',
  CTA_BUTTON: 'Vamos Conversar',
  LOGO_ALT: 'novaAI Logo',
  MENU_ARIA_LABEL: 'Menu de navegação',
  CLOSE_MENU: 'Fechar menu'
} as const;

// URLs e links externos
export const EXTERNAL_LINKS = {
  GITHUB: '#',
  LINKEDIN: '#',
  FACEBOOK: '#'
} as const;

// Configurações SEO
export const SEO = {
  TITLE: 'novaAI - Automações Inteligentes',
  DESCRIPTION: 'Agência especializada em automações inteligentes para empresas que desejam escalar suas operações com eficiência e liberdade operacional.',
  KEYWORDS: ['automação', 'inteligência artificial', 'chatbots', 'whatsapp', 'crm'],
  OG_IMAGE: '/og-image.png'
} as const;

// Estatísticas da empresa
export const STATS = [
  {
    value: '500+',
    label: 'Empresas Atendidas',
    icon: 'TrendingUp'
  },
  {
    value: '2M+',
    label: 'Mensagens Processadas',
    icon: 'Users'
  },
  {
    value: '24/7',
    label: 'Suporte Ativo',
    icon: 'Clock'
  },
  {
    value: '99%',
    label: 'Satisfação',
    icon: 'Target'
  }
] as const;

// Serviços oferecidos
export const SERVICES = [
  {
    title: 'Automação WhatsApp',
    description: 'Chatbots inteligentes que convertem leads em vendas automaticamente',
    icon: 'Settings'
  },
  {
    title: 'Integração CRM',
    description: 'Conecte todas suas ferramentas em um fluxo único e automatizado',
    icon: 'Zap'
  },
  {
    title: 'Follow-up Inteligente',
    description: 'Nunca perca um lead com sequências personalizadas e automáticas',
    icon: 'MessageSquare'
  },
  {
    title: 'Relatórios Avançados',
    description: 'Dashboards em tempo real para acompanhar seus resultados',
    icon: 'BarChart3'
  }
] as const; 