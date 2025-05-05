import React, { useState, useEffect, useRef } from 'react'
import { dataContact } from '../../config/variables'
import { Button, Paper, TextField, Typography, Box, CircularProgress, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ChatIcon from '@mui/icons-material/Chat'
import SendIcon from '@mui/icons-material/Send'

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [messages, setMessages] = useState<Message[]>([
    { text: '¡Hola! Soy Mia tu asistente. ¿En qué puedo ayudarte?', isUser: false, timestamp: new Date() }
  ])
  const [userInput, setUserInput] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [userEmail, setUserEmail] = useState<string>('')
  const [userName, setUserName] = useState<string>('')
  const [isEmailSubmitted, setIsEmailSubmitted] = useState<boolean>(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { email, formURL } = dataContact

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

      setMessages((prev) => [
        ...prev,
        { text: data.response, isUser: false, timestamp: new Date() },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: 'Lo siento, ocurrió un error. Por favor, intenta de nuevo.', isUser: false, timestamp: new Date() },
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
        { text: `Gracias ${userName ? userName : ''}! ¿En qué puedo ayudarte?`, isUser: false, timestamp: new Date() },
      ]);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[1000] font-sans">
      {/* Toggle button */}
      <IconButton 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full shadow-lg transition-all hover:scale-105"
        sx={{ 
          bgcolor: 'primary.main', 
          color: 'white', 
          '&:hover': { bgcolor: 'primary.dark' } 
        }}
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </IconButton>

      {/* Chat window */}
      {isOpen && (
        <Paper 
          elevation={6}
          className="absolute bottom-20 right-0 w-[350px] h-[500px] rounded-lg overflow-hidden flex flex-col"
        >
          <Box className="bg-blue-600 text-white p-4 text-center">
            <Typography variant="subtitle1" fontWeight="bold">
              Asistente Virtual
            </Typography>
          </Box>
          
          <Box className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
            {messages.map((msg, index) => (
              <Box 
                key={index} 
                className={`max-w-[75%] p-3 rounded-2xl mb-2 break-words ${
                  msg.isUser 
                    ? 'bg-blue-100 text-gray-800 self-end rounded-br-sm' 
                    : 'bg-gray-100 text-gray-800 self-start rounded-bl-sm'
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
            <Box className="p-4 flex flex-col gap-3 border-t border-gray-200">
              <TextField
                variant="outlined"
                placeholder="Tu nombre (opcional)"
                fullWidth
                size="small"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="rounded-full"
              />
              <TextField
                variant="outlined"
                placeholder="Tu email"
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
                Comenzar
              </Button>
            </Box>
          ) : (
            <Box className="p-4 flex items-center gap-2 border-t border-gray-200">
              <TextField
                variant="outlined"
                placeholder="Escribe un mensaje..."
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
                className="bg-blue-600 text-white hover:bg-blue-700 w-10 h-10"
              >
                <SendIcon />
              </IconButton>
            </Box>
          )}
        </Paper>
      )}
    </div>
  );
};

export default ChatBot;
