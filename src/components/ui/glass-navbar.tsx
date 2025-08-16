'use client';

import { useState, useCallback } from 'react';
// Removido react-router-dom devido a incompatibilidade de versões
// Removido lucide-react devido a incompatibilidade de versões
import { MENU_ITEMS, TEXTS } from '@/constants';
import type { MenuItemProps } from '@/types';
import { RainbowBorderButton } from './rainbow-border-button';

export function GlassNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = useCallback((href: string) => {
    if (href.startsWith('#')) {
      // Se estamos na home page, fazer scroll suave
      if (window.location.pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Se estamos em outra página, navegar para home com hash
        window.location.href = '/' + href;
      }
    } else {
      // Navegação para outras páginas
      window.location.href = href;
    }
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <header className="fixed top-2 md:top-4 left-2 md:left-4 right-2 md:right-4 z-50">
      <nav className="mx-auto max-w-4xl px-3 md:px-4 lg:px-8 bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-700 rounded-xl md:rounded-2xl">
        <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center hover:scale-105 transition-transform duration-300">
            <img 
              src="/logo.png" 
              alt="AI Logo"
              className="w-20 h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
              onError={(e) => {
                // Fallback para logo em texto se a imagem não carregar
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden flex items-center text-[#00E0B7] font-bold text-lg md:text-xl">
              <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
                              novaAI
            </div>
          </div>

          {/* Desktop Menu - Centralizado */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {MENU_ITEMS.map((item: MenuItemProps, index: number) => (
              <a
                key={`${item.name}-${index}`}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className="text-gray-200 hover:text-white hover:-translate-y-0.5 transition-all duration-300 relative group font-medium cursor-pointer text-xs xl:text-sm whitespace-nowrap"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00E0B7] to-[#00D9A7] transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Botão Vamos Conversar */}
          <div className="hidden lg:block">
            <RainbowBorderButton
              onClick={() => window.open('https://w.app/mlc9ge', '_blank')}
              className="text-xs px-3 py-1.5"
            >
              {TEXTS.CTA_BUTTON}
            </RainbowBorderButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-1.5 md:p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300"
            aria-label={isMobileMenuOpen ? TEXTS.CLOSE_MENU : TEXTS.MENU_ARIA_LABEL}
          >
            {isMobileMenuOpen ? (
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/30 backdrop-blur-xl border-t border-white/10 rounded-b-xl md:rounded-b-2xl animate-fade-in">
            <div className="px-3 md:px-4 py-3 md:py-4 space-y-2 md:space-y-3">
              {MENU_ITEMS.map((item: MenuItemProps, index: number) => (
                <a
                  key={`mobile-${item.name}-${index}`}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className="block text-gray-200 hover:text-white transition-all duration-300 py-2 md:py-3 px-3 md:px-4 rounded-lg hover:bg-white/5 font-medium cursor-pointer text-sm md:text-base"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 md:pt-3">
                <RainbowBorderButton
                  onClick={() => window.open('https://w.app/mlc9ge', '_blank')}
                  className="w-full text-xs md:text-sm py-2 md:py-2.5"
                >
                  {TEXTS.CTA_BUTTON}
                </RainbowBorderButton>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 