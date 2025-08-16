

const testimonials = [
  {
    author: {
      name: "Carlos Silva",
      handle: "@carlossilva",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "A novaAI transformou completamente nossos processos. Reduzimos 80% do tempo gasto em tarefas manuais e aumentamos nossa produtividade em 3x.",
    href: "https://twitter.com/carlossilva"
  },
  {
    author: {
      name: "Ana Costa",
      handle: "@anacosta",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Como coach, sempre tive dificuldade com follow-up de leads. A novaAI automatizou tudo e agora minha conversão aumentou 67%.",
    href: "https://twitter.com/anacosta"
  },
  {
    author: {
      name: "Roberto Santos",
      handle: "@robertosantos",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Nossa clínica odontológica nunca mais perdeu um agendamento. A automação do WhatsApp é incrível e os pacientes adoram.",
    href: "https://twitter.com/robertosantos"
  },
  {
    author: {
      name: "Mariana Lima",
      handle: "@marianalima",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Como infoprodutora, a automação de vendas da novaAI foi um game-changer. ROI de 300% no primeiro mês!",
    href: "https://twitter.com/marianalima"
  },
  {
    author: {
      name: "Pedro Almeida",
      handle: "@pedroalmeida",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Nossa pequena empresa cresceu 150% em 6 meses graças às automações da novaAI. Eficiência e escalabilidade perfeitas.",
    href: "https://twitter.com/pedroalmeida"
  },
  {
    author: {
      name: "Fernanda Oliveira",
      handle: "@fernandaoliveira",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "A integração com CRM e relatórios automáticos mudou nossa gestão. Agora temos insights em tempo real sobre tudo.",
    href: "https://twitter.com/fernandaoliveira"
  }
]

export function FlowUpTestimonials() {
  return (
    <section className="py-16 bg-[#1a1a2e]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transformações reais, resultados comprovados
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja como nossos clientes estão revolucionando seus negócios com automações inteligentes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.author.avatar} 
                  alt={testimonial.author.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.author.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.author.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 