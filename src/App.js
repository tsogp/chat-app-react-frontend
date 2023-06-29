import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './components/Home';
import ChatPage from './components/ChatPage';
import socketIO from 'socket.io-client';

const socket = socketIO.connect('http://localhost:4000');
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/chat" element={
            <ChakraProvider>
              <ChatPage socket={socket} />
            </ChakraProvider>
          }>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;