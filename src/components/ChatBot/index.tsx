import React, { useState, useEffect, useRef } from 'react'
import { Button, Paper, TextField, Typography, Box, CircularProgress, IconButton } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Send, X, BotMessageSquare } from 'lucide-react'
import { dataContact } from '../../config/variables'

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const { t } = useTranslation('OnePage')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setMessages([{ text: t('chatBot.hi'), isUser: false, timestamp: new Date() }]);
  }, [t])
  const [userInput, setUserInput] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [userEmail, setUserEmail] = useState<string>('')
  const [userName, setUserName] = useState<string>('')
  const [isEmailSubmitted, setIsEmailSubmitted] = useState<boolean>(false)
  const [showTooltip, setShowTooltip] = useState<boolean>(true)
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const [isBouncing, setIsBouncing] = useState<boolean>(false)
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

  // Efecto para el bouncing del botón cada minuto
  useEffect(() => {
    // No activamos el bouncing si el chat está abierto
    if (isOpen) return;
    
    // Configuramos el intervalo para activar el bouncing cada minuto
    const bounceInterval = setInterval(() => {
      if (!isOpen) {
        setIsBouncing(true);
        
        // Desactivamos el bouncing después de 5 segundos
        setTimeout(() => {
          setIsBouncing(false);
        }, 5000);
      }
    }, 60000); // 60000ms = 1 minuto
    
    // Activamos el bouncing una vez al inicio
    setIsBouncing(true);
    setTimeout(() => {
      setIsBouncing(false);
    }, 5000);
    
    // Limpiamos los intervalos cuando el componente se desmonte
    return () => {
      clearInterval(bounceInterval);
    };
  }, [isOpen]);

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

    try {
      // Detectar si estamos en un entorno de desarrollo local
      const isLocalDev = process.env.ENVIRONMENT === 'development' || window.location.hostname === 'localhost'
      
      let responseText = ''
      
      if (isLocalDev) {
        // Modo de desarrollo local: usar respuestas simuladas
        console.log('Modo desarrollo: usando respuesta simulada');
        await new Promise(resolve => setTimeout(resolve, 800)); // Simular delay de red
        
        // Algunas respuestas simuladas basadas en palabras clave
        if (userInput.toLowerCase().includes('hola') || userInput.toLowerCase().includes('hi')) {
          responseText = '¡Hola! Soy la versión de prueba del chatbot. ¿En qué puedo ayudarte?'
        } else if (userInput.toLowerCase().includes('ayuda') || userInput.toLowerCase().includes('help')) {
          responseText = 'Estás en modo de desarrollo local. Para probar la funcionalidad completa, necesitarás desplegar en Netlify o usar Netlify Dev localmente.'
        } else {
          responseText = `[MODO DEV] Esta es una respuesta simulada a tu mensaje: "${userInput}"`
        }
      } else {
        // Modo producción: usar la función real de Netlify
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
        responseText = data.response;
      }

      setMessages((prev) => [
        ...prev,
        { text: responseText, isUser: false, timestamp: new Date() },
      ]);
    } catch (error) {
      console.error('Error en el chat:', error);
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
      setMessages((prev) => [
        ...prev,
        { text: t('chatBot.thankYou', { userName: userName || '' }), isUser: false, timestamp: new Date() },
      ]);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[9999] font-sans">
      {/* Speech bubble above the button */}
      {(showTooltip || isHovering) && !isOpen && (
        <div className="absolute -top-16 right-0 bg-white text-gray-800 p-1 rounded-lg shadow-lg text-sm w-48 animate-bounce-slow">
          {/* Texto del globo con z-index para que esté encima */}
          <div className="relative z-10">
            {t('chatBot.hi2')}
          </div>
          {/* Triangle for speech bubble - posicionado bajo el texto */}
          <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45 z-0"></div>
        </div>
      )}
      
      {/* Toggle button con forma de globo de diálogo */}
      <div 
        className={`relative cursor-pointer ${isBouncing ? 'animate-ring-bounce' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Círculos de efecto "ring" cuando está bouncing - MOVIDOS PARA ESTAR DEBAJO */}
        {isBouncing && (
          <>
            <span className="absolute inset-0 rounded-2xl rounded-bl-sm animate-ping-slow bg-[#00AAFF] opacity-75 z-0"></span>
            <span className="absolute inset-0 rounded-2xl rounded-bl-sm animate-ping-slower bg-[#00AAFF] opacity-50 z-0"></span>
          </>
        )}
        
        {/* Contenido del botón con z-index más alto */}
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
        
        {/* Triángulo para forma de globo de diálogo */}
        <div 
          className="absolute -bottom-2 left-4 w-4 h-4 transform rotate-45 z-10"
          style={{ 
            backgroundColor: isOpen ? '#e53935' : '#00AAFF',
          }}
        />
      </div>

      {/* Chat window */}
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
            {messages.map((msg, index) => (
              <Box 
                key={index} 
                className={`max-w-[75%] p-3 rounded-2xl mb-2 break-words ${
                  msg.isUser 
                    ? 'bg-[rgba(0,170,255,0.4)] text-gray-800 self-end rounded-br-sm' 
                    : 'bg-[#c0c0c0c0] text-gray-800 self-start rounded-bl-sm'
                }`}
              >
                <Typography variant="body2">{msg.text}</Typography>
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
