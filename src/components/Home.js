import { Heading, Input, Box, Flex, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowForwardCircle } from "react-icons/io5";

const Home = ({ socket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(socket.id, userName);
    socket.emit('newUser', { userName, socketID: socket.id });
    navigate('/chat');
  };
  
  return (
    <Flex height='90vh' justifyContent='center' alignItems='center'>
      <Box borderWidth='1px' borderRadius='lg'>
        <form onSubmit={handleSubmit}>
          <Heading>Sign in to Open Chat</Heading>
          <Flex flexDirection="row">
            <Input
              flex="1"
              placeholder='Username'
              type="text"
              name="username"
              minLength={2}
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              mr={2}
            >
            </Input>
            <IconButton type='submit' icon={<IoArrowForwardCircle/>}></IconButton>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default Home;