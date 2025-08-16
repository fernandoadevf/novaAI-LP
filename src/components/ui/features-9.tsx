'use client'
import { TrendingUp, Globe, Zap, MapPin, Target } from 'lucide-react'
import DottedMap from 'dotted-map'

export function Features() {
    return (
        <section className="px-4 py-16 md:py-32 bg-[#1a1a2e]">
            <div className="mx-auto grid max-w-5xl border border-[#00E0B7]/20 md:grid-cols-2 bg-[#1a1a2e]">
                <div>
                    <div className="p-6 sm:p-12">
                        <span className="text-[#00E0B7] flex items-center gap-2">
                            <Globe className="size-4" />
                            Cenário Global
                        </span>

                        <p className="mt-8 text-2xl font-semibold text-white">Em países como Estados Unidos, Canadá e Alemanha, a automação já é parte central das operações comerciais, impulsionando crescimento e eficiência.</p>
                    </div>

                    <div aria-hidden className="relative">
                        <div className="absolute inset-0 z-10 m-auto size-fit">
                            <div className="rounded-lg bg-[#1a1a2e] z-[1] dark:bg-[#1a1a2e] relative flex size-fit w-fit items-center gap-2 border border-[#00E0B7]/20 px-3 py-1 text-xs font-medium shadow-md shadow-black/5">
                                <span className="text-lg">🇺🇸</span> Automação Avançada
                            </div>
                            <div className="rounded-lg bg-[#1a1a2e] absolute inset-2 -bottom-2 mx-auto border border-[#00E0B7]/20 px-3 py-4 text-xs font-medium shadow-md shadow-black/5 dark:bg-[#1a1a2e]"></div>
                        </div>

                        <div className="relative overflow-hidden">
                            <div className="[background-image:radial-gradient(var(--tw-gradient-stops))] z-1 to-[#1a1a2e] absolute inset-0 from-transparent to-75%"></div>
                            <Map />
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden border-t border-[#00E0B7]/20 bg-[#1a1a2e] p-6 sm:p-12 md:border-0 md:border-l dark:bg-[#1a1a2e]">
                    <div className="relative z-10">
                        <span className="text-[#00E0B7] flex items-center gap-2">
                            <MapPin className="size-4" />
                            Realidade Brasileira
                        </span>

                        <p className="my-8 text-2xl font-semibold text-white">A maioria das empresas brasileiras ainda depende de processos manuais, perdendo agilidade, tempo e oportunidades. Isso torna este mercado pouco explorado e altamente promissor.</p>
                    </div>
                    <div aria-hidden className="flex flex-col gap-8">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="flex justify-center items-center size-5 rounded-full border border-[#00E0B7]">
                                    <span className="size-3 rounded-full bg-[#00E0B7]"/>
                                </span>
                                <span className="text-gray-400 text-xs">Mercado Brasileiro</span>
                            </div>
                            <div className="rounded-lg bg-[#1a1a2e] mt-1.5 w-3/5 border border-[#00E0B7]/20 p-3 text-xs text-white">Processos manuais ainda dominam o cenário nacional.</div>
                        </div>

                        <div>
                            <div className="rounded-lg mb-1 ml-auto w-3/5 bg-[#00E0B7] p-3 text-xs text-black">Oportunidade única para automação!</div>
                            <span className="text-gray-400 block text-right text-xs">Mercado promissor</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-full border-y border-[#00E0B7]/20 p-12 bg-[#00E0B7]">
                    <div className="flex items-center justify-center mb-4">
                        <TrendingUp className="w-6 h-6 text-black mr-3" />
                        <h3 className="text-xl font-semibold text-black">Impacto Comprovado</h3>
                    </div>
                    <p className="text-black text-lg text-center">
                        "Estudo da HubSpot e McKinsey indica que empresas que incorporaram IA como parte do time de vendas <span className="font-bold">aumentaram a receita em até 67%</span>, em comparação com times comerciais tradicionais."
                    </p>
                </div>
                <div className="col-span-full bg-[#1a1a2e] p-12">
                    <div className="text-center mb-8">
                        <span className="text-[#00E0B7] flex items-center justify-center gap-2 mb-4">
                            <Target className="size-6" />
                            Oportunidade Única
                        </span>
                        <h3 className="text-3xl font-bold text-white mb-4">
                            O mercado brasileiro de automação ainda está em crescimento, criando oportunidades únicas
                        </h3>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            Enquanto países desenvolvidos já consolidaram suas automações, o Brasil oferece um cenário único para empresas que querem se destacar através da inovação e eficiência operacional.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className="text-center p-6 border border-[#00E0B7]/20 rounded-lg">
                            <div className="w-12 h-12 bg-[#00E0B7] rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="w-6 h-6 text-black" />
                            </div>
                            <h4 className="text-white font-semibold mb-2">Crescimento Rápido</h4>
                            <p className="text-gray-300 text-sm">Mercado em expansão acelerada</p>
                        </div>
                        
                        <div className="text-center p-6 border border-[#00E0B7]/20 rounded-lg">
                            <div className="w-12 h-12 bg-[#00E0B7] rounded-full flex items-center justify-center mx-auto mb-4">
                                <Target className="w-6 h-6 text-black" />
                            </div>
                            <h4 className="text-white font-semibold mb-2">Pouca Concorrência</h4>
                            <p className="text-gray-300 text-sm">Mercado pouco explorado</p>
                        </div>
                        
                        <div className="text-center p-6 border border-[#00E0B7]/20 rounded-lg">
                            <div className="w-12 h-12 bg-[#00E0B7] rounded-full flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-6 h-6 text-black" />
                            </div>
                            <h4 className="text-white font-semibold mb-2">Alto Potencial</h4>
                            <p className="text-gray-300 text-sm">Resultados comprovados</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const map = new DottedMap({ height: 55, grid: 'diagonal' })

const points = map.getPoints()

const svgOptions = {
    backgroundColor: '#1a1a2e',
    color: '#00E0B7',
    radius: 0.15,
}

const Map = () => {
    const viewBox = `0 0 120 60`
    return (
        <svg viewBox={viewBox} style={{ background: svgOptions.backgroundColor }}>
            {points.map((point, index) => (
                <circle key={index} cx={point.x} cy={point.y} r={svgOptions.radius} fill={svgOptions.color} />
            ))}
        </svg>
    )
} 