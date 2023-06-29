import React, { useState } from 'react';
import { Flex, Input, IconButton } from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState('');

  const handleTyping = () =>
    socket.emit('typing', `${localStorage.getItem(socket.id)} is typing`);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem(socket.id)) {
      socket.emit('message', {
        text: message,
        name: localStorage.getItem(socket.id),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage('');
  };

  return (
    <form onSubmit={handleSendMessage}>
      <Flex width={"100%"} flexDirection={"row"} alignItems={"stretch"}>
        <Input
          flex="1"
          placeholder="Type your message..."
          mr={2}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
          onSubmit={handleSendMessage}
        />  
        <IconButton
          aria-label="Send"
          icon={<IoSend />}
          type="submit"
        />
      </Flex>
    </form>
  );
};

export default ChatFooter;