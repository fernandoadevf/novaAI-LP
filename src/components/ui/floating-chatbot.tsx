'use client';

import { useState, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

interface Option {
  id: string;
  text: string;
  action: string;
}

// interface ConversationStep {
//   message: string;
//   options: Option[];
//   showNameInput?: boolean;
// }

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState('initial');
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState('');
  const [userBusiness, setUserBusiness] = useState('');
  const [userArea, setUserArea] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [businessInput, setBusinessInput] = useState('');

  // Configuração do fluxo de conversa
  const conversationFlow = {
    initial: {
      message: "Olá! Eu sou a Ana, especialista em automações aqui da novaAI. Antes de tudo, me conta: qual é o seu nome?",
      options: [],
      showNameInput: true
    },
    get_name: {
      message: "Perfeito! E qual é o seu negócio ou área de atuação?",
      options: [
        { id: 'mentorias', text: '🎓 Mentorias & Consultorias', action: 'analyze_business' },
        { id: 'imobiliaria', text: '🏠 Imobiliária', action: 'analyze_business' },
        { id: 'ecommerce', text: '🛒 E-commerce', action: 'analyze_business' },
        { id: 'infoprodutos', text: '📚 Infoprodutos & Cursos', action: 'analyze_business' },
        { id: 'agencia', text: '📈 Agência de Marketing', action: 'analyze_business' },
        { id: 'outro', text: '💡 Outro', action: 'custom_business' }
      ]
    },
    custom_business: {
      message: "Interessante! Me conta qual é seu negócio ou área de atuação específica:",
      options: [],
      showBusinessInput: true
    },
    analyze_business: {
      message: `Que interessante! ${userBusiness ? `Trabalhar com ${userBusiness.toLowerCase()}` : 'Seu segmento'} tem muito potencial para automação. Me conta, qual é o seu maior desafio hoje? O que mais te toma tempo?`,
              options: [
          { id: 'leads', text: 'Capturar e nutrir leads', action: 'solution_leads' },
          { id: 'atendimento', text: 'Atendimento ao cliente', action: 'solution_atendimento' },
          { id: 'vendas', text: 'Processo de vendas', action: 'solution_vendas' },
          { id: 'agendamentos', text: 'Agendamentos e reuniões', action: 'solution_agendamentos' },
          { id: 'financeiro', text: 'Controle financeiro', action: 'solution_financeiro' }
        ]
    },
          solution_leads: {
        message: `Entendi perfeitamente, ${userName}! A captação e nutrição de leads é crucial para ${userBusiness}. Nossos clientes conseguiram aumentar a conversão em até 300% automatizando:\n\n• Captura automática de leads\n• Sequências de e-mail personalizadas\n• Segmentação inteligente\n• Follow-up automático\n\nQuer que eu te mostre como isso funcionaria no seu negócio?`,
        options: [
          { id: 'yes_solution', text: 'Sim, me mostra!', action: 'get_contact' },
          { id: 'more_info', text: 'Preciso de mais detalhes', action: 'detailed_explanation' }
        ]
      },
          solution_atendimento: {
        message: `Perfeito, ${userName}! O atendimento é o coração de ${userBusiness}. Imagine automatizar:\n\n• Respostas instantâneas 24/7\n• Triagem automática de dúvidas\n• Chatbots inteligentes\n• Integração com WhatsApp\n\nNossos clientes reduziram 80% do tempo de atendimento!`,
        options: [
          { id: 'yes_solution', text: 'Quero implementar isso!', action: 'get_contact' },
          { id: 'more_info', text: 'Como funciona na prática?', action: 'detailed_explanation' }
        ]
      },
          solution_vendas: {
        message: `Excelente, ${userName}! Vendas automatizadas são game-changer para ${userBusiness}. Veja o que podemos automatizar:\n\n• CRM automático\n• Propostas personalizadas\n• Follow-up de vendas\n• Upsell e cross-sell\n\nClientes aumentaram vendas em 150%!`,
        options: [
          { id: 'yes_solution', text: 'Preciso disso agora!', action: 'get_contact' },
          { id: 'more_info', text: 'Quanto custa implementar?', action: 'detailed_explanation' }
        ]
      },
          solution_agendamentos: {
        message: `Ótima escolha, ${userName}! Agendamentos automatizados são essenciais para ${userBusiness}. Automatizamos:\n\n• Calendário inteligente\n• Lembretes automáticos\n• Reagendamentos\n• Integração com Zoom/Meet\n\nEconomize 10h por semana!`,
        options: [
          { id: 'yes_solution', text: 'Quero economizar esse tempo!', action: 'get_contact' },
          { id: 'more_info', text: 'Funciona com minha agenda?', action: 'detailed_explanation' }
        ]
      },
          solution_financeiro: {
        message: `Muito importante, ${userName}! Controle financeiro automatizado para ${userBusiness} inclui:\n\n• Cobrança automática\n• Relatórios em tempo real\n• Conciliação bancária\n• Controle de inadimplência\n\nClientes reduziram 90% do trabalho manual!`,
        options: [
          { id: 'yes_solution', text: 'Preciso disso urgente!', action: 'get_contact' },
          { id: 'more_info', text: 'É seguro? Como funciona?', action: 'detailed_explanation' }
        ]
      },
          detailed_explanation: {
        message: `${userName}, entendo suas dúvidas! Cada automação é personalizada para ${userBusiness}. Trabalhamos com:\n\n✅ Integração segura\n✅ Suporte completo\n✅ Treinamento da equipe\n✅ ROI garantido\n\nQue tal conversarmos 15min para eu te mostrar cases similares ao seu?`,
        options: [
          { id: 'schedule_call', text: 'Vamos conversar!', action: 'get_contact' },
          { id: 'whatsapp_info', text: 'Prefiro por WhatsApp', action: 'whatsapp_explain' }
        ]
      },
          get_contact: {
        message: `Perfeito, ${userName}! Vou te conectar com nossa equipe especializada em ${userBusiness}. Eles vão te mostrar exatamente como implementar essas automações no seu negócio.\n\nPronto para revolucionar sua operação?`,
        options: [
          { 
            id: 'whatsapp_contact', 
            text: 'Sim, vamos começar!', 
            action: 'whatsapp_meeting'
          }
        ]
      }
  };

  const getWhatsappLink = (type: 'meeting' | 'explain') => {
    const baseMessage = `Olá! Acabei de falar com a Ana da novaAI.`;
    const userInfo = userName ? `\n\n📋 Meus dados:\n• Nome: ${userName}${userBusiness ? `\n• Negócio: ${userBusiness}` : ''}${userArea ? `\n• Área de interesse: ${userArea}` : ''}` : '';
    
    if (type === 'meeting') {
      return `https://w.app/mlc9ge?text=${encodeURIComponent(baseMessage + `\n\nQuero agendar uma reunião para conhecer as automações personalizadas para meu negócio.${userInfo}\n\nQuando podemos conversar?`)}`;
    } else {
      return `https://w.app/mlc9ge?text=${encodeURIComponent(baseMessage + `\n\nGostaria de entender melhor como as automações funcionam na prática.${userInfo}\n\nPode me explicar mais detalhes?`)}`;
    }
  };

  // Simular digitação do bot
  const addBotMessage = (text: string, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        text,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, delay);
  };

  // Adicionar mensagem do usuário
  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  // Lidar com envio de nome
  const handleNameSubmit = () => {
    if (nameInput.trim()) {
      const name = nameInput.trim();
      setUserName(name);
      addUserMessage(name);
      setNameInput('');
      
      setTimeout(() => {
        addBotMessage(`Prazer, ${name}!`, 800);
      }, 500);
      
      setTimeout(() => {
        setCurrentStep('get_name');
        const nextFlow = conversationFlow['get_name' as keyof typeof conversationFlow];
        if (nextFlow) {
          addBotMessage(nextFlow.message, 1500);
        }
      }, 1300);
    }
  };

  // Lidar com envio de negócio customizado
  const handleBusinessSubmit = () => {
    if (businessInput.trim()) {
      const business = businessInput.trim();
      setUserBusiness(business);
      addUserMessage(business);
      setBusinessInput('');
      
      setTimeout(() => {
        addBotMessage(`Entendi! ${business} é uma área muito interessante!`, 800);
      }, 500);
      
      setTimeout(() => {
        setCurrentStep('analyze_business');
        const nextFlow = conversationFlow['analyze_business' as keyof typeof conversationFlow];
        if (nextFlow) {
          addBotMessage(nextFlow.message, 1500);
        }
      }, 1300);
    }
  };

    // Lidar com seleção de opção
  const handleOptionClick = (option: Option) => {
    addUserMessage(option.text);

    // Capturar informações do usuário baseado no step atual
    if (currentStep === 'get_name') {
      const businessMap: { [key: string]: string } = {
        'mentorias': 'Mentorias & Consultorias',
        'imobiliaria': 'Imobiliária',
        'ecommerce': 'E-commerce',
        'infoprodutos': 'Infoprodutos & Cursos',
        'agencia': 'Agência de Marketing',
        'outro': 'Outro'
      };
      setUserBusiness(businessMap[option.id] || option.text);
    }

    if (option.action.includes('solution_')) {
      const areaMap: { [key: string]: string } = {
        'solution_leads': 'Captação de leads',
        'solution_atendimento': 'Atendimento ao cliente',
        'solution_vendas': 'Processo de vendas',
        'solution_agendamentos': 'Agendamentos',
        'solution_financeiro': 'Controle financeiro'
      };
      setUserArea(areaMap[option.action] || '');
    }

    // Ações especiais do WhatsApp
    if (option.action === 'whatsapp_meeting') {
      setTimeout(() => {
        window.open(getWhatsappLink('meeting'), '_blank');
      }, 500);
      return;
    }

    if (option.action === 'whatsapp_explain') {
      setTimeout(() => {
        window.open(getWhatsappLink('explain'), '_blank');
      }, 500);
      return;
    }

    // Continuar conversa
    setTimeout(() => {
      setCurrentStep(option.action);
      const nextFlow = conversationFlow[option.action as keyof typeof conversationFlow];
      if (nextFlow) {
        addBotMessage(nextFlow.message, 1500);
      }
    }, 300);
  };

  // Inicializar conversa quando abrir
  useEffect(() => {
    if (isOpen && messages.length === 0 && currentStep === 'initial') {
      addBotMessage(conversationFlow.initial.message, 1000);
    }
  }, [isOpen, messages.length, currentStep]);

  // Resetar conversa quando fechar
  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setMessages([]);
      setCurrentStep('initial');
      setIsTyping(false);
      setUserName('');
      setUserBusiness('');
      setUserArea('');
      setNameInput('');
      setBusinessInput('');
    }, 300);
  };

  const currentFlow = conversationFlow[currentStep as keyof typeof conversationFlow];

  return (
    <>
      {/* Botão flutuante */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Círculo de fundo com glow */}
        <div className="absolute inset-0 bg-[#00E0B7] rounded-full blur-md opacity-60 animate-ping-slow"></div>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`group relative bg-gradient-to-r from-[#00E0B7] to-[#00D9A7] hover:from-[#00D9A7] hover:to-[#00C896] text-black rounded-full p-1 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 ${
            isOpen ? '' : 'animate-bounce-soft'
          }`}
        >
          <div className="relative w-16 h-16 bg-white rounded-full p-1 overflow-hidden">
            {isOpen ? (
              <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-full">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            ) : (
              <>
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b820?w=80&h=80&fit=crop&crop=face" 
                  alt="Ana - Especialista novaAI"
                  className="w-full h-full object-cover rounded-full ring-2 ring-white"
                  onError={(e) => {
                    // Fallback para avatar genérico
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMzIiIGZpbGw9IiMwMEUwQjciLz4KPHN2ZyB4PSIyMCIgeT0iMTYiIHdpZHRoPSIyNCIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJ3aGl0ZSI+CjxwYXRoIGQ9Ik0xMiAxMmMtMS42NiAwLTMtMS4zNC0zLTNzMS4zNC0zIDMtMyAzIDEuMzQgMyAzLTEuMzQgMy0zIDMueiIvPgo8cGF0aCBkPSJNMTIgMTRjLTIuNjcgMC04IDEuMzQtOCA0djJoMTZ2LTJjMC0yLjY2LTUuMzMtNC04LTR6Ii8+Cjwvc3ZnPgo8L3N2Zz4K";
                  }}
                />
                
                {/* Status online */}
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              </>
            )}
            
            {/* Indicador de nova mensagem */}
            {!isOpen && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 border-2 border-white rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">!</span>
              </div>
            )}
          </div>
        </button>
        
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute bottom-20 right-0 transform translate-x-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
              Converse com a Ana
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
            </div>
          </div>
        )}
      </div>

      {/* Chat Window */}
      <div className={`fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 ${
        isOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 pointer-events-none'
      }`}>
        
        {/* Header */}
        <div className="bg-[#00E0B7] text-black p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b820?w=80&h=80&fit=crop&crop=face" 
                alt="Ana - Especialista novaAI"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback para avatar genérico
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iMjAiIGZpbGw9IiMwMEUwQjciLz4KPHN2ZyB4PSIxMiIgeT0iMTAiIHdpZHRoPSIxNiIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJibGFjayI+CjxwYXRoIGQ9Ik0xMiAxMmMtMS42NiAwLTMtMS4zNC0zLTNzMS4zNC0zIDMtMyAzIDEuMzQgMyAzLTEuMzQgMy0zIDMueiIvPgo8cGF0aCBkPSJNMTIgMTRjLTIuNjcgMC04IDEuMzQtOCA0djJoMTZ2LTJjMC0yLjY2LTUuMzMtNC04LTR6Ii8+Cjwvc3ZnPgo8L3N2Zz4K";
                }}
              />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Ana • novaAI</h3>
              <p className="text-xs opacity-75">Online agora</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="hover:bg-black/10 rounded-full p-1 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                  message.sender === 'user'
                    ? 'bg-[#00E0B7] text-black ml-4'
                    : 'bg-white text-gray-800 shadow-sm mr-4'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <div className="bg-white text-gray-800 shadow-sm rounded-2xl px-4 py-2 mr-4">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Name Input */}
        {!isTyping && currentFlow && messages.length > 0 && (currentFlow as any).showNameInput && (
          <div className="p-4 bg-white rounded-b-2xl border-t border-gray-100 relative z-10">
            <div className="space-y-3">
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleNameSubmit();
                  }
                }}
                placeholder="Digite seu nome aqui..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00E0B7] focus:border-transparent text-sm text-gray-900 bg-white"
                autoFocus
                autoComplete="off"
                spellCheck={false}
              />
              <button
                onClick={handleNameSubmit}
                disabled={!nameInput.trim()}
                className="w-full px-4 py-3 bg-[#00E0B7] hover:bg-[#00D9A7] disabled:bg-gray-300 disabled:cursor-not-allowed text-black rounded-xl transition-all duration-200 text-sm font-medium"
              >
                {nameInput.trim() ? 'Enviar ✨' : 'Digite seu nome primeiro...'}
              </button>
            </div>
          </div>
        )}

        {/* Business Input */}
        {!isTyping && currentFlow && messages.length > 0 && (currentFlow as any).showBusinessInput && (
          <div className="p-4 bg-white rounded-b-2xl border-t border-gray-100 relative z-10">
            <div className="space-y-3">
              <input
                type="text"
                value={businessInput}
                onChange={(e) => setBusinessInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleBusinessSubmit();
                  }
                }}
                placeholder="Ex: Consultoria jurídica, Academia, Restaurante..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00E0B7] focus:border-transparent text-sm text-gray-900 bg-white"
                autoFocus
                autoComplete="off"
                spellCheck={false}
              />
              <button
                onClick={handleBusinessSubmit}
                disabled={!businessInput.trim()}
                className="w-full px-4 py-3 bg-[#00E0B7] hover:bg-[#00D9A7] disabled:bg-gray-300 disabled:cursor-not-allowed text-black rounded-xl transition-all duration-200 text-sm font-medium"
              >
                {businessInput.trim() ? 'Enviar ✨' : 'Descreva seu negócio...'}
              </button>
            </div>
          </div>
        )}

        {/* Options */}
        {!isTyping && currentFlow && messages.length > 0 && !(currentFlow as any).showNameInput && !(currentFlow as any).showBusinessInput && currentFlow.options.length > 0 && (
          <div className="p-4 bg-white rounded-b-2xl border-t border-gray-100">
            <div className="space-y-2">
              {currentFlow.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option)}
                  className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-[#00E0B7] hover:text-black text-gray-700 rounded-xl transition-all duration-200 text-sm font-medium"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
} 