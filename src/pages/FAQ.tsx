import { GlowingCard } from "@/components/ui/glowing-card";
import { HyperText } from "@/components/ui/hyper-text";
import { GlassNavbar } from "@/components/ui/glass-navbar";
import { BeamsBackground } from "@/components/ui/beams-background";

const faqData = [
  {
    question: "O que exatamente a novaAI faz?",
    answer: "Nós criamos automações personalizadas para empresas, desde agendamento de reuniões, envio de mensagens no WhatsApp, integrações com CRM, até fluxos complexos de vendas e atendimento. A ideia é reduzir tarefas manuais e aumentar sua produtividade."
  },
  {
    question: "Preciso ter conhecimento técnico para usar as automações?",
    answer: "Não! Toda a parte técnica é feita por nós. Você só precisa dizer qual é o fluxo desejado, e entregamos pronto para usar, com treinamento rápido para sua equipe."
  },
  {
    question: "Quais ferramentas vocês integram?",
    answer: "Integramos com WhatsApp, Google Calendar, CRM (HubSpot, Pipedrive, RD Station, etc.), plataformas de e-mail, formulários, sistemas internos e praticamente qualquer software com API disponível."
  },
  {
    question: "Quanto tempo leva para implementar uma automação?",
    answer: "Depende da complexidade, mas em média as primeiras automações ficam prontas entre 10 dias úteis. Projetos maiores podem levar algumas semanas."
  },
  {
    question: "Preciso assinar algum plano fixo?",
    answer: "Oferecemos planos mensais de suporte e manutenção, mas você também pode contratar projetos pontuais."
  },
  {
    question: "As automações são seguras?",
    answer: "Sim. Utilizamos servidores seguros, APIs oficiais e boas práticas de proteção de dados para garantir a segurança das suas informações."
  },
  {
    question: "O que acontece se eu precisar de suporte depois da entrega?",
    answer: "Você pode contar com nosso time de suporte, seja através do plano mensal ou sob demanda. Estamos disponíveis para ajustes, melhorias e monitoramento."
  }
];

export default function FAQ() {
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
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-2">
              <span className="text-white">Perguntas</span>
              <HyperText 
                text="Frequentes"
                className="text-[#00E0B7] font-bold"
                duration={1000}
                animateOnLoad={true}
              />
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços de automação empresarial
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <GlowingCard key={index} className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#00E0B7] rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {index + 1}
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 ml-11 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </GlowingCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#00E0B7]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ainda tem dúvidas?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Entre em contato conosco e vamos esclarecer tudo!
          </p>
          <button
            onClick={() => window.open('https://w.app/mlc9ge', '_blank')}
            className="inline-flex items-center gap-2 bg-[#00E0B7] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#00D9A7] transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
            </svg>
            Falar no WhatsApp
          </button>
        </div>
      </section>

      {/* Footer - Contato */}
      <footer className="py-8 md:py-12 bg-[#1a1a2e] border-t border-gray-700">
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
    </div>
  );
} 