import React, { useState, useEffect, useRef } from 'react';
import './Chat.css'; 
import Button from '../../components/atoms/Button/Button';
import Image from '../../components/atoms/Image/Image';
import Logo from '../../assets/logo.png'; 


type Message = {
  from: 'user' | 'bot';
  text: string;
};

const predefinedMessages = [
  "¡Hello, how are you! 🐶",
  "What kind of animal do you have?",
  "When did you first notice symptoms?🐾",
  "Have you had blood tests, ultrasounds, or X-rays?",
  "Have any natural or alternative treatments worked?",
  "What special care do you provide at home?",
  "How do you manage your pet's anxiety or pain?",
  "Do you recommend a veterinarian? What was your experience like?",
  "How do you prepare emotionally for saying goodbye?"
];

const getRandomMessage = () => {
  const index = Math.floor(Math.random() * predefinedMessages.length);
  return predefinedMessages[index];
};
const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);

  const addMessage = (text: string, from: 'user' | 'bot') => { //recibe argumentos 
    setMessages((prev) => [...prev, { from, text }]); //setMessages(...): Se actualiza el estado de los mensajes.
    // prev: Se refiere al estado anterior de los mensajes.
    // {...prev, { from, text }}: Se crea un nuevo array que contiene todos los mensajes anteriores y el nuevo mensaje.
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
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);// Desplaza el chat hacia abajo para mostrar el último mensaje
  }, [messages]);

  return (
    <>
    <div className="logo">
        <Image src={Logo} alt="Logo" className="logo" aria-hidden="true" />
      </div>

      <div className="chat">
        <div className="chat-title">
          <h1>Fabio Ottaviani</h1>
          <h2>Supah</h2>
          <figure className="avatar">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" /></figure>
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
            onChange={(e) => setInput(e.target.value)}// Actualiza el estado del input
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}// Permite enviar el mensaje al presionar Enter
            placeholder="Type message..."
          />

          <Button onClick={handleSend}  className="button">
              Send 
          </Button>
        </div>
      </div>
    <div className="bg"></div>
    </>

  );
};

export default Chat;
