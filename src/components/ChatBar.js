import React, { useState, useEffect } from 'react';
import { Box, Button, Text, Flex } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const ChatBar = ({ socket }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users]);

  const handleLeaveChat = () => {
    localStorage.removeItem(socket.id);
    navigate('/');
    window.location.reload();
  };

  return (
    <Flex 
      w={270}
      p={2} 
      borderRightWidth={1} 
      flexDirection={"column"}
      justifyContent={"space-between"}
      height="100%" 
      color={"#e0e1dd"} 
      bgColor={"#0096c7"}
      position={"relative"}
    >
      <Box>
        <Text className="bar__text">CHAT ROOM</Text>
        <Box>
          <Text className="bar__text">ACTIVE USERS</Text> 
          {users.map(user => (
            <Text className="bar__text">{user.userName}</Text>
          ))}
        </Box>
      </Box>
      <Button width={"100%"} onClick={handleLeaveChat}>
        Leave Chat
      </Button>
    </Flex>
  );
};

export default ChatBar;