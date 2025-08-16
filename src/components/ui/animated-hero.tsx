import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
// Removido lucide-react devido a incompatibilidade de versões
import { HyperText } from "@/components/ui/hyper-text";
import { FlowUpStatsCards } from "./flowup-stats-cards";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["personalizadas", "escaláveis", "inteligentes"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full bg-[#1a1a2e]">
      <div className="container mx-auto">
        <div className="flex gap-4 md:gap-6 lg:gap-12 pt-20 pb-8 sm:pt-24 sm:pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-24 items-center justify-center flex-col px-4">
          
          {/* Primeiro Bloco - Título Principal */}
          <div className="flex gap-4 md:gap-6 flex-col items-center text-center max-w-4xl w-full">
            <div className="flex items-center gap-2 bg-[#00E0B7] text-black rounded-full px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base">
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <HyperText 
                text="eficiência e liberdade operacional"
                className="text-black font-medium text-xs md:text-sm"
                duration={1200}
                animateOnLoad={true}
              />
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter font-bold leading-tight">
              <span className="text-white">Automações</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold text-[#00E0B7]"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="text-white">para sua empresa</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-tight text-gray-300 max-w-3xl px-4 text-center">
              Agência especializada em automações inteligentes para empresas e empreendedores que desejam escalar suas operações com eficiência e liberdade operacional.
            </p>
          </div>

          {/* Resultados que Impressionam - Integrado no Hero */}
          <div className="mt-8 md:mt-12 w-full">
            <FlowUpStatsCards />
          </div>

        </div>
      </div>
    </div>
  );
}

export { Hero }; 