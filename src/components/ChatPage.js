import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState, useRef } from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

const ChatApp = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState('');
  const lastMessageRef = useRef(null);

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    socket.on('typingResponse', (data) => setTypingStatus(data));
  }, [socket]);

  return (
    <Flex height="100vh" alignItems="stretch">
      <ChatBar socket={socket} />
      <Flex 
        flexDirection={"column"} 
        width="80%" 
        borderWidth={1} 
        p={2}
        justifyContent={"space-between"}
      >
        <ChatBody 
          messages={messages} 
          typingStatus={typingStatus}
          lastMessageRef={lastMessageRef}
          socket={socket}
        />
        <ChatFooter socket={socket}/>
      </Flex>
    </Flex>
  );
};

export default ChatApp;