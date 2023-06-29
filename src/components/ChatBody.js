import React from 'react';
import Message from './Message'
import { Box } from '@chakra-ui/react';

const ChatBody = ({ messages, typingStatus, lastMessageRef, socket }) => {
  return (
    <Box height="90vh" overflowY="auto">
      {messages.map((message, index) => (
        <Message
          message={message.text}
          author={message.name}
          socketID={socket.id}
          key={index}
        />
      ))}
      <Box ref={lastMessageRef}></Box>
    </Box>
  );
};

export default ChatBody;