import React, { useState, useEffect, useRef } from 'react';
import './Chat.css'; 
import Button from '../../components/atoms/Button/Button';
import Image from '../../components/atoms/Image/Image';
import Logo from '../../assets/logo.png'; 
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../components/atoms/LanguageSwitcher/LanguageSwitcher';


type Message = {
  from: 'user' | 'bot';
  text: string;
};

const Chat: React.FC = () => {
  const { t } = useTranslation('chat');
  const botMessages = t('botMessages', { returnObjects: true }) as string[];
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);

  const getRandomMessage = () => {
    const index = Math.floor(Math.random() * botMessages.length);
    return botMessages[index];
  };

  const addMessage = (text: string, from: 'user' | 'bot') => {
    setMessages((prev) => [...prev, { from, text }]);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    addMessage(input, 'user');
    setInput('');

    setTimeout(() => {
      addMessage(getRandomMessage(), 'bot');
    }, 1500);
  };

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages]);

  return (
    <>
    
      <div className="logo">
        <Image src={Logo} alt="Logo" className="logo" aria-hidden="true" />
      </div>
    
        

      <div className="chat">
        <LanguageSwitcher/>
        <div className="chat-title">
          <h1>Andres Sanchéz</h1>
          <h2>Chance</h2>
          <figure className="avatar">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" alt="Avatar" />
          </figure>
        </div>

        <div className="messages" ref={chatRef}>
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.from}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="input-area">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={t('placeholder')}
          />
          <Button onClick={handleSend} className="button">
            {t('send')}
          </Button>
        </div>
      </div>

      <div className="bg"></div>
    </>
  );
};

export default Chat;
