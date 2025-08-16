"use client";
import { Zap, BarChart3, MessageSquare, Settings, Star, Square } from "lucide-react";
import { GlowingCard } from "./glowing-card";
import { HyperText } from "@/components/ui/hyper-text";

export function FlowUpGlowingCards() {
  return (
    <section className="py-8 md:py-12 bg-[#1a1a2e]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 flex items-center justify-center gap-2 flex-wrap">
            <span className="text-white">O que</span>
            <HyperText 
              text="fazemos"
              className="text-[#00E0B7] font-bold"
              duration={1000}
              animateOnLoad={true}
            />
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white px-4 max-w-3xl mx-auto">
            Oferecemos soluções completas para automatizar e escalar suas operações comerciais
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          <GlowingCard>
            <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6">
              <div className="relative flex flex-1 flex-col justify-between gap-3">
                <div className="w-fit rounded-lg border-[0.75px] border-gray-800 bg-gray-900 p-3">
                  <div className="flex items-center gap-1">
                    <Settings className="w-5 h-5 text-[#00E0B7]" />
                    <Star className="w-3 h-3 text-[#00E0B7]" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white">
                    Mapeamento de Processos
                  </h3>
                  <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-300">
                    Identificamos e mapeamos todos os processos manuais internos da sua empresa para otimização completa.
                  </p>
                </div>
              </div>
            </div>
          </GlowingCard>

          <GlowingCard>
            <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6">
              <div className="relative flex flex-1 flex-col justify-between gap-3">
                <div className="w-fit rounded-lg border-[0.75px] border-gray-800 bg-gray-900 p-3">
                  <div className="flex items-center gap-1">
                    <Square className="w-5 h-5 text-[#00E0B7]" />
                    <Settings className="w-3 h-3 text-[#00E0B7]" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white">
                    Digitalização de Fluxos
                  </h3>
                  <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-300">
                    Transformamos seus processos operacionais em fluxos digitais eficientes e organizados.
                  </p>
                </div>
              </div>
            </div>
          </GlowingCard>

          <GlowingCard>
            <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6">
              <div className="relative flex flex-1 flex-col justify-between gap-3">
                <div className="w-fit rounded-lg border-[0.75px] border-gray-800 bg-gray-900 p-3">
                  <Zap className="w-5 h-5 text-[#00E0B7]" />
                </div>
                <div className="space-y-3">
                  <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white">
                    Automações Integradas
                  </h3>
                  <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-300">
                    Criamos automações que conectam WhatsApp, e-mail, CRM, planilhas e calendários em um sistema único.
                  </p>
                </div>
              </div>
            </div>
          </GlowingCard>

          <GlowingCard>
            <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6">
              <div className="relative flex flex-1 flex-col justify-between gap-3">
                <div className="w-fit rounded-lg border-[0.75px] border-gray-800 bg-gray-900 p-3">
                  <MessageSquare className="w-5 h-5 text-[#00E0B7]" />
                </div>
                <div className="space-y-3">
                  <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white">
                    Follow-up Inteligente
                  </h3>
                  <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-300">
                    Implementamos sistemas de nutrição de leads, follow-up automático e geração de propostas.
                  </p>
                </div>
              </div>
            </div>
          </GlowingCard>

          <GlowingCard>
            <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6">
              <div className="relative flex flex-1 flex-col justify-between gap-3">
                <div className="w-fit rounded-lg border-[0.75px] border-gray-800 bg-gray-900 p-3">
                  <BarChart3 className="w-5 h-5 text-[#00E0B7]" />
                </div>
                <div className="space-y-3">
                  <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white">
                    Relatórios Automatizados
                  </h3>
                  <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-300">
                    Dashboards operacionais e relatórios gerados automaticamente para acompanhar resultados.
                  </p>
                </div>
              </div>
            </div>
          </GlowingCard>
        </div>
      </div>
    </section>
  );
} 