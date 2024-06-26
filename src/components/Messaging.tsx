import React, { useState, useEffect, useRef } from 'react';
import useWebSocket from 'react-use-websocket';

const Messaging = () => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<{ text: string; sentByMe: boolean }[]>([]);
  const messageContainerRef = useRef<HTMLDivElement>(null);

  const { sendMessage, lastMessage } = useWebSocket('ws://localhost:3000');

  useEffect(() => {
    if (lastMessage !== null) {
      const data = JSON.parse(lastMessage.data);

      if (data.type === 'message') {
        setMessages((prev) => [...prev, { text: data.text, sentByMe: false }]);
        scrollToBottom();
      } else if (data.type === 'info') {
        setMessages((prev) => [...prev, { text: data.message, sentByMe: false }]);
      }
    }
  }, [lastMessage]);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      sendMessage(message);
      setMessages((prev) => [...prev, { text: message, sentByMe: true }]);
      setMessage('');
      scrollToBottom();
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  };

  return (
    <div className='w-full flex flex-col gap-4 items-center'>
      <h2 className='text-3xl font-extrabold'>Messaging</h2>
      <div className='w-full max-w-lg border rounded-lg shadow-lg'>
        <div
          ref={messageContainerRef}
          className='p-4 h-80 overflow-y-auto flex flex-col gap-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'
          style={{ backgroundColor: '#f9f9f9' }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sentByMe ? 'justify-end' : 'justify-start'}`}
            >
              <p
                className={`px-4 py-2 rounded-lg max-w-xs ${
                  msg.sentByMe ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'
                }`}
              >
                {msg.text}
              </p>
            </div>
          ))}
        </div>
        <div className='flex items-center gap-2 p-4'>
          <input
            className='border p-3 w-full rounded-xl'
            type="text"
            value={message}
            placeholder='Type a message'
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            onClick={handleSendMessage}
            className='bg-green-500 rounded-lg px-4 py-2 text-white'
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messaging;
