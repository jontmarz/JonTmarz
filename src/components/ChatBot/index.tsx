import React, { useState, useEffect, useRef } from 'react'
import { Button, Paper, TextField, Typography, Box, CircularProgress, IconButton } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Send, X, BotMessageSquare } from 'lucide-react'
import { dataContact } from '../../config/variables'

interface MenuOption {
  id: string
  text: string
  icon: string  // This should match the backend format
  action: string[]
  submenus?: MenuOption[]  // Add support for submenus as defined in backend
}

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
  menuOptions?: MenuOption[]
}

const ChatBot: React.FC = () => {
  const { t } = useTranslation('OnePage')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [userEmail, setUserEmail] = useState<string>('')
  const [userName, setUserName] = useState<string>('')
  const [isEmailSubmitted, setIsEmailSubmitted] = useState<boolean>(false)
  const [showTooltip, setShowTooltip] = useState<boolean>(true)
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const [isBouncing, setIsBouncing] = useState<boolean>(false)
  const [debugMessage, setDebugMessage] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { email, formURL } = dataContact

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (isOpen) {
      setShowTooltip(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) return;
    
    const bounceInterval = setInterval(() => {
      if (!isOpen) {
        setIsBouncing(true);
        setTimeout(() => {
          setIsBouncing(false);
        }, 5000);
      }
    }, 60000);
    
    setIsBouncing(true);
    setTimeout(() => {
      setIsBouncing(false);
    }, 5000);
    
    return () => {
      clearInterval(bounceInterval);
    };
  }, [isOpen]);

  useEffect(() => {
    // Initialize with welcome message that persists
    setMessages([{ text: t('chatBot.hi'), isUser: false, timestamp: new Date() }]);
  }, [t]);

  useEffect(() => {
    // Listen for custom event to open chatbot
    const handleOpenChatBot = () => {
      setIsOpen(true);
    };

    window.addEventListener('openChatBot', handleOpenChatBot);
    
    return () => {
      window.removeEventListener('openChatBot', handleOpenChatBot);
    };
  }, []);

  const fetchInitialMenu = async () => {
    if (isEmailSubmitted) {
      setIsLoading(true);
      try {
        const isLocalDev = window.location.hostname === 'localhost' || 
                          window.location.hostname === '127.0.0.1' || 
                          process.env.NODE_ENV === 'development' ||
                          process.env.REACT_APP_ENVIRONMENT === 'development';
        
        // Always try to use the backend first, even in dev mode
        try {
          setDebugMessage(isLocalDev ? 'Dev mode: Intentando usar backend...' : 'Cargando menú...');
          
          const response = await fetch('/.netlify/functions/ChatBot', {
            method: 'POST',
            body: JSON.stringify({
              message: "menu",
              pageUrl: window.location.href,
              pageTitle: document.title,
              formPath: formURL,
              contactEmail: email,
              email: userEmail,
              name: userName,
            }),
          });
          
          const data = await response.json();
          if (data.menu && Array.isArray(data.menu)) {
            // Just add menu message, don't replace existing welcome message
            setMessages(prev => [
              ...prev, 
              {
                text: data.response || '¿En qué puedo ayudarte? Selecciona una opción:',
                isUser: false,
                timestamp: new Date(),
                menuOptions: data.menu
              }
            ]);
            
            // Clear debug message after successful response
            if (isLocalDev) setDebugMessage('Dev mode: Respuesta recibida del backend correctamente');
            return;
          }
        } catch (backendError) {
          // If we're in dev mode, we'll show debug info and fall back to mock data
          if (isLocalDev) {
            console.error('Error al comunicarse con el backend:', backendError);
            setDebugMessage(`Dev mode: Error al comunicarse con el backend. Usando respuestas simuladas.`);
            
            // Wait a bit to show the loading state
            await new Promise(resolve => setTimeout(resolve, 800));
            
            const mockMenuOptions: MenuOption[] = [
              { id: 'services', text: '🛠️ Servicios ofrecidos', icon: 'home', action: ['SHOW_SERVICES'] },
              { id: 'consulting', text: '🤖 Consultoría en IA', icon: 'ai', action: ['SHOW_CONSULTING'] },
              { id: 'courses', text: '📚 Cursos con IA', icon: 'book', action: ['SHOW_COURSES'] },
              { id: 'digital-launcher', text: '🚀 Lanzador Digital GPT', icon: 'rocket', action: ['SHOW_LAUNCHER'] },
              { id: 'contact', text: '📞 Contacto y soporte', icon: 'phone', action: ['SHOW_CONTACT'] },
              { id: 'other', text: '❓ Otra pregunta', icon: 'question', action: ['ASK_QUESTION'] },
            ];
            
            setMessages(prev => [
              ...prev, 
              {
                text: '[MODO DEV] ¿En qué puedo ayudarte? Selecciona una opción:',
                isUser: false,
                timestamp: new Date(),
                menuOptions: mockMenuOptions
              }
            ]);
          } else {
            // In production, propagate the error
            throw backendError;
          }
        }
      } catch (error) {
        console.error('Error loading initial menu:', error);
        setDebugMessage(`Error loading menu: ${error instanceof Error ? error.message : 'Unknown error'}`);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (isEmailSubmitted) {
      fetchInitialMenu();
    }
  }, [isEmailSubmitted]);

  const handleMenuOptionSelect = async (option: MenuOption) => {
    const userSelectionMessage: Message = {
      text: option.text,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userSelectionMessage]);
    setIsLoading(true);

    try {
      const isLocalDev = window.location.hostname === 'localhost' || 
                        window.location.hostname === '127.0.0.1' || 
                        process.env.NODE_ENV === 'development' ||
                        process.env.REACT_APP_ENVIRONMENT === 'development';
      
      let responseText = '';
      let menuOptions: MenuOption[] | undefined = undefined;
      
      // Try using backend first, even in dev mode
      try {
        if (isLocalDev) {
          setDebugMessage('Dev mode: Procesando opción de menú con backend...');
        }
        
        const response = await fetch('/.netlify/functions/ChatBot', {
          method: 'POST',
          body: JSON.stringify({
            menuAction: option.action[0],
            message: option.text,
            pageUrl: window.location.href,
            pageTitle: document.title,
            formPath: formURL,
            contactEmail: email,
            email: userEmail || undefined,
            name: userName || undefined,
          }),
        });

        const data = await response.json();
        responseText = data.response;
        
        if (data.menu && Array.isArray(data.menu)) {
          menuOptions = data.menu;
        }
        
        if (isLocalDev) {
          setDebugMessage('Dev mode: Respuesta del backend procesada correctamente');
        }
      } catch (backendError) {
        // Only fallback to mock data in development mode
        if (isLocalDev) {
          console.error('Error al comunicarse con el backend:', backendError);
          setDebugMessage(`Dev mode: Error al procesar con el backend. Usando respuesta simulada.`);
          
          // Simulate response delay
          await new Promise(resolve => setTimeout(resolve, 800));
          
          // Use mock responses based on the option
          switch(option.id) {
            case 'services':
              responseText = '[MODO DEV] ¡Descubre nuestra gama de servicios profesionales diseñados para impulsar tu éxito! 🚀';
              menuOptions = [
                { id: 'architecture', text: '🔧 Arquitectura de software', icon: 'tool', action: ['SHOW_ARCHITECTURE'] },
                { id: 'automation', text: '🤖 Automatización de procesos', icon: 'robot', action: ['SHOW_AUTOMATION'] },
                { id: 'consulting', text: '🤖 Consultoría en IA', icon: 'ai', action: ['SHOW_CONSULTINGIA'] },
                { id: 'development', text: '💻 Desarrollo de software', icon: 'code', action: ['SHOW_DEVELOPMENT'] },
                { id: 'back', text: '↩️ Menú Principal', icon: 'back', action: ['BACK_MAIN'] },
              ];
              break;
            // ...existing mock menu cases...
            default:
              responseText = `[MODO DEV] Procesando opción de menú: ${option.text}`;
              break;
          }
        } else {
          // In production, propagate the error
          throw backendError;
        }
      }

      setMessages((prev) => [
        ...prev,
        { 
          text: responseText, 
          isUser: false, 
          timestamp: new Date(),
          menuOptions: menuOptions
        },
      ]);
    } catch (error) {
      console.error('Error processing menu selection:', error);
      setDebugMessage(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setMessages((prev) => [
        ...prev,
        { text: t('chatBot.sorry'), isUser: false, timestamp: new Date() },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const newUserMessage: Message = {
      text: userInput,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setUserInput('');
    setIsLoading(true);
    setDebugMessage(null);

    try {
      const isLocalDev = window.location.hostname === 'localhost' || 
                         window.location.hostname === '127.0.0.1' || 
                         process.env.NODE_ENV === 'development' ||
                         process.env.REACT_APP_ENVIRONMENT === 'development';
      
      let responseText = '';
      let menuOptions: MenuOption[] | undefined = undefined;
      
      // Try using backend first, even in dev mode
      try {
        if (isLocalDev) {
          setDebugMessage('Dev mode: Enviando mensaje al backend...');
        }
        
        const response = await fetch('/.netlify/functions/ChatBot', {
          method: 'POST',
          body: JSON.stringify({
            message: userInput,
            pageUrl: window.location.href,
            pageTitle: document.title,
            formPath: formURL,
            contactEmail: email,
            email: userEmail || undefined,
            name: userName || undefined,
          }),
        });

        const data = await response.json();
        
        // Check if the response indicates a third-party service error
        if (data.error && isLocalDev && 
            (data.error.includes('API key not configured') || 
             data.error.includes('third party') || 
             data.error.includes('OpenAI'))) {
          
          // This is a third-party service error in development mode
          throw new Error(`Third party service error: ${data.error}`);
        }
        
        responseText = data.response;
        
        if (data.menu && Array.isArray(data.menu)) {
          menuOptions = data.menu;
        }
        
        if (isLocalDev) {
          setDebugMessage('Dev mode: Respuesta del backend recibida correctamente');
        }
      } catch (backendError) {
        // Only use mock responses in development mode
        if (isLocalDev) {
          console.error('Error al comunicarse con el backend:', backendError);
          setDebugMessage(`Dev mode: ${backendError instanceof Error ? backendError.message : 'Error al comunicarse con el backend'}. Usando respuesta simulada.`);
          
          // Simulate network delay
          await new Promise(resolve => setTimeout(resolve, 800));
          
          // Check for menu request keywords
          if (userInput.toLowerCase().includes('menu') || 
              userInput.toLowerCase().includes('ayuda') || 
              userInput.toLowerCase().includes('opciones')) {
            
            responseText = "[MODO DEV] ¿En qué puedo ayudarte? Selecciona una opción:";
            menuOptions = [
              { id: 'services', text: '🛠️ Servicios ofrecidos', icon: 'home', action: ['SHOW_SERVICES'] },
              { id: 'consulting', text: '🤖 Consultoría en IA', icon: 'ai', action: ['SHOW_CONSULTING'] },
              { id: 'courses', text: '📚 Cursos con IA', icon: 'book', action: ['SHOW_COURSES'] },
              { id: 'digital-launcher', text: '🚀 Lanzador Digital GPT', icon: 'rocket', action: ['SHOW_LAUNCHER'] },
              { id: 'contact', text: '📞 Contacto y soporte', icon: 'phone', action: ['SHOW_CONTACT'] },
              { id: 'other', text: '❓ Otra pregunta', icon: 'question', action: ['ASK_QUESTION'] },
            ];
          } else {
            // Generate a mock response based on user input
            const input = userInput.toLowerCase();
            if (input.includes('hola') || input.includes('hi')) {
              responseText = '[MODO DEV] ¡Hola! Soy la versión de prueba del chatbot. ¿En qué puedo ayudarte?';
            } else if (input.includes('ayuda') || input.includes('help')) {
              responseText = '[MODO DEV] Estás en modo de desarrollo local. El backend está disponible pero hay un problema con algún servicio externo.';
            } else {
              responseText = `[MODO DEV] Esta es una respuesta simulada a tu mensaje: "${userInput}"`;
            }
          }
        } else {
          // In production, propagate the error
          throw backendError;
        }
      }

      setMessages((prev) => [
        ...prev,
        { 
          text: responseText, 
          isUser: false, 
          timestamp: new Date(),
          menuOptions: menuOptions
        },
      ]);
    } catch (error) {
      console.error('Error en el chat:', error);
      setDebugMessage(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setMessages((prev) => [
        ...prev,
        { text: t('chatBot.sorry'), isUser: false, timestamp: new Date() },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitEmail = () => {
    if (userEmail && userEmail.includes('@')) {
      setIsEmailSubmitted(true);
      
      // Add thank you message without removing welcome message
      setMessages((prev) => [
        ...prev,
        { text: t('chatBot.thankYou', { userName: userName || '' }), isUser: false, timestamp: new Date() },
      ]);
    }
  };

  const MenuOptions: React.FC<{ options: MenuOption[] }> = ({ options }) => {
    const renderIcon = (icon: string) => {
      if (/^[\u{1F300}-\u{1F5FF}\u{1F900}-\u{1F9FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F191}-\u{1F251}\u{1F004}\u{1F0CF}\u{1F170}-\u{1F171}\u{1F17E}-\u{1F17F}\u{1F18E}\u{3030}\u{2B50}\u{2B55}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2B1B}-\u{2B1C}\u{3297}\u{3299}\u{303D}\u{00A9}\u{00AE}\u{2122}\u{23F3}\u{24C2}\u{23E9}-\u{23EF}\u{25AA}-\u{25AB}\u{25B6}\u{25C0}\u{25FB}-\u{25FE}\u{2603}\u{2604}\u{2614}\u{2615}\u{2640}\u{2642}\u{2660}-\u{2663}\u{2665}-\u{2666}\u{2668}\u{267B}\u{267E}-\u{267F}\u{2693}\u{261D}\u{2620}\u{2638}-\u{263A}\u{2648}-\u{2653}\u{2B00}-\u{2B0D}\u{2B50}\u{2B55}]/u.test(icon)) {
        return icon;
      }
      
      switch(icon.toLowerCase()) {
        case 'home': return '🏠';
        case 'ai': return '🤖';
        case 'book': return '📚';
        case 'rocket': return '🚀';
        case 'phone': return '📞';
        case 'question': return '❓';
        case 'tool': return '🔧';
        case 'robot': return '🤖';
        case 'code': return '💻';
        case 'back': return '↩️';
        case 'form': return '📝';
        case 'email': return '📧';
        case 'whatsapp': return '📱';
        case 'call': return '📞';
        default: return '•';
      }
    };
    
    return (
      <Box className="flex flex-col gap-2 mt-2 mb-1 w-full">
        <Typography variant="caption" className="text-gray-600 mb-1 font-medium">
          {t('chatBot.selectOption', 'Selecciona una opción:')}
        </Typography>
        {options.map((option) => (
          <Button
            key={option.id}
            variant="outlined"
            startIcon={<span role="img" aria-label={option.id}>{renderIcon(option.icon)}</span>}
            onClick={() => handleMenuOptionSelect(option)}
            className="justify-start text-left normal-case py-2 px-3"
            fullWidth
            sx={{
              borderColor: '#00AAFF',
              color: '#00AAFF',
              borderRadius: '8px',
              fontSize: '0.875rem',
              fontWeight: 500,
              '&:hover': {
                borderColor: '#0088CC',
                backgroundColor: 'rgba(0, 170, 255, 0.1)',
              },
            }}
          >
            {option.text.replace(/^[\p{Emoji}]+\s*/u, '')}
          </Button>
        ))}
      </Box>
    );
  };

  return (
    <div className="fixed bottom-5 right-5 z-[9999] font-sans">
      {(showTooltip || isHovering) && !isOpen && (
        <div className="absolute -top-16 right-0 bg-white text-gray-800 p-1 rounded-lg shadow-lg text-sm w-48 animate-bounce-slow">
          <div className="relative z-10">
            {t('chatBot.hi2')}
          </div>
          <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45 z-0"></div>
        </div>
      )}
      
      <div 
        className={`relative cursor-pointer ${isBouncing ? 'animate-ring-bounce' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isBouncing && (
          <>
            <span className="absolute inset-0 rounded-2xl rounded-bl-sm animate-ping-slow bg-[#00AAFF] opacity-75 z-0"></span>
            <span className="absolute inset-0 rounded-2xl rounded-bl-sm animate-ping-slower bg-[#00AAFF] opacity-50 z-0"></span>
          </>
        )}
        
        <div 
          className="relative w-14 h-12 rounded-2xl rounded-bl-sm flex items-center justify-center shadow-lg transition-all hover:scale-105 z-10"
          style={{ 
            backgroundColor: isOpen ? '#e53935' : '#00AAFF',
            color: 'white',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <BotMessageSquare className="h-6 w-6" />}
        </div>
        
        <div 
          className="absolute -bottom-2 left-4 w-4 h-4 transform rotate-45 z-10"
          style={{ 
            backgroundColor: isOpen ? '#e53935' : '#00AAFF',
          }}
        />
      </div>

      {isOpen && (
        <Paper 
          elevation={6}
          className="absolute bottom-10 right-0 w-[350px] h-[500px] rounded-lg overflow-hidden flex flex-col"
          sx={{ zIndex: 9999 }}
        >
          <Box className="bg-[#00AAFF] text-white p-4 text-center">
            <Typography variant="subtitle1" fontWeight="bold">
              {t('chatBot.title')}
            </Typography>
          </Box>
          
          <Box className="bg-[#fff] flex-1 p-4 overflow-y-auto flex flex-col gap-3">
            {debugMessage && (
              <Box className="bg-yellow-100 p-2 rounded text-xs text-gray-800 mb-2">
                <Typography variant="caption">{debugMessage}</Typography>
              </Box>
            )}
            {messages.map((msg, index) => (
              <Box 
                key={index} 
                className={`${msg.isUser ? 'max-w-[75%] self-end' : 'max-w-[85%] self-start'} mb-3`}
              >
                <Box 
                  className={`p-3 rounded-2xl break-words ${
                    msg.isUser 
                      ? 'bg-[rgba(0,170,255,0.4)] text-gray-800 rounded-br-sm' 
                      : 'bg-[#f0f0f0] text-gray-800 rounded-bl-sm'
                  }`}
                >
                  <Typography variant="body2">{msg.text}</Typography>
                </Box>
                
                {!msg.isUser && msg.menuOptions && msg.menuOptions.length > 0 && (
                  <Box className="mt-2 ml-1">
                    <MenuOptions options={msg.menuOptions} />
                  </Box>
                )}
              </Box>
            ))}
            {isLoading && (
              <Box className="bg-gray-100 max-w-[75%] p-3 rounded-2xl mb-2 self-start rounded-bl-sm">
                <CircularProgress size={20} className="text-blue-600" />
              </Box>
            )}
            <div ref={messagesEndRef} />
          </Box>

          {!isEmailSubmitted ? (
            <Box className="bg-[#00000F] p-4 flex flex-col gap-3 border-t border-gray-200">
              <TextField
                variant="outlined"
                placeholder={t('chatBot.name')}
                fullWidth
                size="small"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="rounded-full"
              />
              <TextField
                variant="outlined"
                placeholder={t('chatBot.email')}
                fullWidth
                type="email"
                size="small"
                required
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="rounded-full"
              />
              <Button 
                variant="contained"
                onClick={handleSubmitEmail}
                disabled={!userEmail || !userEmail.includes('@')}
                className="rounded-full py-2 px-4 font-bold w-full"
                disableElevation
              >
                {t('chatBot.start')}
              </Button>
            </Box>
          ) : (
            <Box className="p-4 flex items-center gap-2 border-t border-gray-200">
              <TextField
                variant="outlined"
                placeholder={t('chatBot.typeMessage')}
                fullWidth
                size="small"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="rounded-full"
              />
              <IconButton 
                color="primary"
                onClick={handleSend} 
                disabled={!userInput.trim() || isLoading}
                className="bg-[#00AAFF] text-white hover:bg-[rgba(0,172,255, 0.6)] w-10 h-10"
              >
                <Send />
              </IconButton>
            </Box>
          )}
        </Paper>
      )}
    </div>
  );
};

export default ChatBot;
