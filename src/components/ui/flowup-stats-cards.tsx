"use client";

// Removido lucide-react devido a incompatibilidade de versões
import { GlowingCard } from "./glowing-card";
import { HyperText } from "@/components/ui/hyper-text";

export function FlowUpStatsCards() {
  return (
    <section className="py-6 md:py-8 container mx-auto px-4">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 flex items-center justify-center gap-2 flex-wrap">
          <span className="text-white">Resultados que</span>
          <HyperText 
            text="Impressionam"
            className="text-[#00E0B7] font-bold"
            duration={1000}
            animateOnLoad={true}
          />
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-white max-w-2xl mx-auto px-4">
          Nossos clientes experimentam crescimento real e mensurável em suas receitas
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <GlowingCard className="p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Lado esquerdo - Número impressionante */}
            <div className="text-center space-y-6 order-2 lg:order-1">
              <div className="flex flex-col items-center justify-center gap-4 mb-6">
                <div className="p-4 bg-[#00E0B7] rounded-full">
                  <svg className="h-8 w-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Média dos clientes</div>
                  <div className="text-lg md:text-xl font-semibold text-white">Aumento na Receita</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#00E0B7] leading-none">
                  +127%
                </div>
                <div className="text-gray-300 text-sm px-4">
                  *Baseado em dados dos últimos 12 meses
                </div>
              </div>
            </div>

            {/* Lado direito - Explicação detalhada */}
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center lg:text-left">
                Como alcançamos esses resultados?
              </h3>
              
              <div className="space-y-4">
                <div className="group flex items-start gap-4 p-4 sm:p-5 bg-black/20 rounded-xl border border-gray-700/50 hover:bg-black/30 hover:border-[#00E0B7]/30 transition-all duration-300 cursor-pointer">
                  <div className="w-4 h-4 bg-[#00E0B7] rounded-full mt-1 flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(0,224,183,0.6)] transition-all duration-300"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-2 group-hover:text-[#00E0B7] transition-colors duration-300 text-base sm:text-lg">
                      Automação de Follow-up
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      Recuperamos 40% mais leads perdidos com sequências inteligentes que nutrem relacionamentos
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 sm:p-5 bg-black/20 rounded-xl border border-gray-700/50 hover:bg-black/30 hover:border-[#00E0B7]/30 transition-all duration-300 cursor-pointer">
                  <div className="w-4 h-4 bg-[#00E0B7] rounded-full mt-1 flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(0,224,183,0.6)] transition-all duration-300"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-2 group-hover:text-[#00E0B7] transition-colors duration-300 text-base sm:text-lg">
                      Qualificação Inteligente
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      Focamos apenas em leads de alta conversão, aumentando drasticamente a eficiência de vendas
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 sm:p-5 bg-black/20 rounded-xl border border-gray-700/50 hover:bg-black/30 hover:border-[#00E0B7]/30 transition-all duration-300 cursor-pointer">
                  <div className="w-4 h-4 bg-[#00E0B7] rounded-full mt-1 flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(0,224,183,0.6)] transition-all duration-300"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-2 group-hover:text-[#00E0B7] transition-colors duration-300 text-base sm:text-lg">
                      Otimização Contínua
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      Ajustamos os fluxos baseado em dados reais de performance e métricas de conversão
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <div className="flex items-center gap-3 text-[#00E0B7] font-semibold text-base sm:text-lg">
                  <span className="text-xl">💡</span>
                  <span>Resultado: Mais vendas, menos trabalho manual</span>
                </div>
              </div>
            </div>
          </div>
        </GlowingCard>
      </div>
    </section>
  );
} 