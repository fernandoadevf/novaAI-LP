// Tipos para navegação
export interface MenuItemProps {
  name: string;
  href: string;
}

// Tipos para componentes UI
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

// Tipos para testimoniais
export interface TestimonialProps {
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  text: string;
  href?: string;
}

// Tipos para estatísticas
export interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  description: string;
  gradient: string;
}

// Tipos para serviços/cards
export interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

// Tipos para features
export interface FeatureProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient?: string;
}

// Tipos para seções
export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

// Tipos para animações
export interface AnimationProps {
  delay?: number;
  duration?: number;
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  exit?: Record<string, any>;
}

// Tipos para loading
export interface LoadingState {
  isLoading: boolean;
  progress?: number;
}

// Tipos para navbar
export interface NavbarProps {
  menuItems: MenuItemProps[];
  logo?: {
    src: string;
    alt: string;
  };
}

// Tipos para modal/dialog
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

// Tipos utilitários
export type ClassName = string | undefined;
export type Children = React.ReactNode;
export type IconComponent = React.ComponentType<{ className?: string }>; 