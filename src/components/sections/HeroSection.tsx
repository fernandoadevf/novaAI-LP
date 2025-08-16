import React from 'react';
import { Hero } from '@/components/ui/animated-hero';
import type { SectionProps } from '@/types';

interface HeroSectionProps extends Omit<SectionProps, 'children'> {}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  id = 'home',
  className = ''
}) => {
  return (
    <section id={id} className={className}>
      <Hero />
    </section>
  );
}; 