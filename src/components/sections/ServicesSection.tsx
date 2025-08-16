import React from 'react';
import { FlowUpGlowingCards } from '@/components/ui/flowup-glowing-cards';
import type { SectionProps } from '@/types';

interface ServicesSectionProps extends Omit<SectionProps, 'children'> {}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  id = 'servicos',
  className = ''
}) => {
  return (
    <section id={id} className={className}>
      <FlowUpGlowingCards />
    </section>
  );
}; 