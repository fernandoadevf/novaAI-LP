import { useEffect } from "react"
import { Hero } from "@/components/ui/animated-hero"
import { Button } from "@/components/ui/button"
import { FlowUpGlowingCards } from "@/components/ui/flowup-glowing-cards"


import { GlowingCard } from "@/components/ui/glowing-card"
import { BeamsBackground } from "@/components/ui/beams-background"
import { HyperText } from "@/components/ui/hyper-text"
import { GlassNavbar } from "@/components/ui/glass-navbar"
import { Features } from "@/components/ui/features-9"
import { FloatingChatbot } from "@/components/ui/floating-chatbot"
import { 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  PhoneCall,

  Wrench,
  Headphones,
  RefreshCw,
  MapPin,
  GraduationCap,
  Building,
  Bot,
  ArrowUpDown,

} from "lucide-react"

export default function LandingPage() {
  useEffect(() => {
    // Auto scroll para seção quando há hash na URL
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        // Delay para permitir que a página carregue completamente
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1a2e] relative overflow-hidden">
      {/* Beams Background Effect */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        pointerEvents: 'none',
        zIndex: 0 
      }}>
        <BeamsBackground />
      </div>
      
      {/* Glass Navbar */}
      <GlassNavbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* O que fazemos - Com GlowingEffect */}
      <section id="servicos">
        <FlowUpGlowingCards />
      </section>

      {/* Nosso Diferencial */}
      <section className="py-8 md:py-12 bg-[#1a1a2e]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 flex items-center justify-center gap-2 flex-wrap">
              <span className="text-white">Nosso</span>
              <HyperText 
                text="Diferencial"
                className="text-[#00E0B7] font-bold"
                duration={1000}
                animateOnLoad={true}
              />
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white px-4 max-w-3xl mx-auto">
              O que nos torna únicos no mercado de automações empresariais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <GlowingCard>
              <div className="text-center">
                <div className="p-6 bg-[#00E0B7] rounded-full w-fit mx-auto mb-6">
                  <Wrench className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Soluções Sob Medida</h3>
                <p className="text-gray-300">Criamos automações personalizadas para seu negócio, sem templates genéricos. Cada solução é única e adaptada às suas necessidades específicas.</p>
              </div>
            </GlowingCard>

            <GlowingCard>
              <div className="text-center">
                <div className="p-6 bg-[#00E0B7] rounded-full w-fit mx-auto mb-6">
                  <Headphones className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Suporte Contínuo</h3>
                <p className="text-gray-300">Oferecemos suporte técnico dedicado e manutenção recorrente mensal para garantir que suas automações funcionem perfeitamente.</p>
              </div>
            </GlowingCard>

            <GlowingCard>
              <div className="text-center">
                <div className="p-6 bg-[#00E0B7] rounded-full w-fit mx-auto mb-6">
                  <RefreshCw className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Evolução Constante</h3>
                <p className="text-gray-300">Atualizamos e adaptamos suas automações conforme seu negócio evolui, mantendo-as sempre alinhadas com seus objetivos.</p>
              </div>
            </GlowingCard>
          </div>
        </div>
      </section>

      {/* Uma Grande Oportunidade */}
      <Features />

      {/* Quem Atendemos */}
      <section className="py-8 md:py-12 bg-[#1a1a2e]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 flex items-center justify-center gap-2 flex-wrap">
              <span className="text-white">Quem</span>
              <HyperText 
                text="Atendemos"
                className="text-[#00E0B7] font-bold"
                duration={1000}
                animateOnLoad={true}
              />
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white px-4 max-w-3xl mx-auto">
              Especializamos nossas soluções para nichos específicos, garantindo máxima efetividade
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <GlowingCard>
              <div className="p-4 bg-[#00E0B7] rounded-lg w-fit mb-4">
                <GraduationCap className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Infoprodutores & Agências</h3>
              <p className="text-gray-300">Lançadores, criadores de conteúdo e agências digitais que precisam escalar suas operações de vendas e marketing.</p>
            </GlowingCard>

            <GlowingCard>
              <div className="p-4 bg-[#00E0B7] rounded-lg w-fit mb-4">
                <Users className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Profissionais Liberais</h3>
              <p className="text-gray-300">Coaches, dentistas, consultores, médicos e outros profissionais que dependem de agendamentos e follow-up.</p>
            </GlowingCard>

            <GlowingCard>
              <div className="p-4 bg-[#00E0B7] rounded-lg w-fit mb-4">
                <Building className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Pequenas Empresas</h3>
              <p className="text-gray-300">Negócios com atendimento digital ativo que buscam otimizar processos de vendas e relacionamento com clientes.</p>
            </GlowingCard>

            <GlowingCard>
              <div className="p-4 bg-[#00E0B7] rounded-lg w-fit mb-4">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Negócios Locais</h3>
              <p className="text-gray-300">Empresas locais que dependem de agendamentos, vendas diretas e relacionamento próximo com clientes.</p>
            </GlowingCard>
          </div>
        </div>
      </section>

      {/* Tecnologia Avançada */}
      <section className="py-12 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 text-[#00E0B7] mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-2">
              <span className="text-white">Tecnologia</span>
              <HyperText 
                text="Avançada"
                className="text-[#00E0B7] font-bold"
                duration={1000}
                animateOnLoad={true}
              />
            </h2>
          </div>
          <p className="text-xl text-white">
            Utilizamos as mais modernas ferramentas de automação e inteligência artificial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <GlowingCard>
            <div className="text-center">
              <div className="p-4 bg-[#00E0B7] rounded-lg w-fit mx-auto mb-4">
                <Bot className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">IA Integrada</h3>
              <p className="text-gray-300">Automações inteligentes que aprendem com seu negócio</p>
            </div>
          </GlowingCard>

          <GlowingCard>
            <div className="text-center">
              <div className="p-4 bg-[#00E0B7] rounded-lg w-fit mx-auto mb-4">
                <ArrowUpDown className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Fluxos Personalizados</h3>
              <p className="text-gray-300">Cada processo é único para sua empresa</p>
            </div>
          </GlowingCard>



          <GlowingCard>
            <div className="text-center">
              <div className="p-4 bg-[#00E0B7] rounded-lg w-fit mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Implementação Rápida</h3>
              <p className="text-gray-300">Suas automações funcionando em até 10 dias</p>
            </div>
          </GlowingCard>
        </div>

        <GlowingCard className="p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Pronto para a transformação digital?</h3>
          <p className="text-xl text-gray-300 mb-8">Descubra como nossa tecnologia pode revolucionar seus processos</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#00E0B7] text-black hover:bg-[#00D9A7]">Setup em 10 dias</Button>
            <Button className="bg-[#00E0B7] text-black hover:bg-[#00D9A7]">ROI garantido</Button>
            <Button className="bg-[#00E0B7] text-black hover:bg-[#00D9A7]">Suporte 24/7</Button>
          </div>
        </GlowingCard>
      </section>



      {/* CTA Final */}
      <section className="py-12 md:py-16 bg-[#00E0B7]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-black flex items-center justify-center gap-2 flex-wrap">
            <span>Pronto para</span>
            <HyperText 
              text="automatizar"
              className="text-white font-bold"
              duration={1000}
              animateOnLoad={true}
            />
            <span>seu negócio?</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-black mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Agende uma consulta gratuita e descubra como podemos transformar suas operações, liberar seu tempo e acelerar seus resultados com automações inteligentes.
          </p>
                      <Button 
            size="lg" 
            className="bg-[#1a1a2e] text-white hover:bg-gray-700"
            onClick={() => window.open('https://w.app/mlc9ge', '_blank')}
          >
            <PhoneCall className="w-5 h-5 mr-2" />
            Agendar Consulta Gratuita
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>


        </div>
      </section>

            {/* Footer - Contato */}
      <footer id="contato" className="py-8 md:py-12 bg-[#1a1a2e] border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center">
            {/* Logo */}
            <div className="flex items-center justify-center space-x-2 mb-6">
              <svg className="w-8 h-8 text-[#00E0B7]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <span className="text-2xl font-bold text-[#00E0B7]">novaAI</span>
            </div>
            
            {/* Título */}
            <h3 className="text-white font-semibold mb-6 text-lg">Entre em Contato</h3>
            
            {/* Informações de Contato */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 text-gray-300">
              {/* Email */}
              <a 
                href="mailto:ainova.adm@gmail.com" 
                className="flex items-center hover:text-[#00E0B7] transition-colors duration-300 group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                ainova.adm@gmail.com
              </a>
              
              {/* Instagram */}
              <a 
                href="https://instagram.com/novaai.oficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-[#00E0B7] transition-colors duration-300 group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @novaai.oficial
              </a>
              
              {/* Telefone */}
              <a 
                href="tel:+5547884098469" 
                className="flex items-center hover:text-[#00E0B7] transition-colors duration-300 group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.57.12.35.03.75-.24 1.02l-2.2 2.2z"/>
                </svg>
                +55 47 8840-9869
              </a>
            </div>
            
            {/* Copyright */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                © 2024 novaAI. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot Flutuante */}
      <FloatingChatbot />
    </div>
  )
} 