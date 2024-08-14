import React from 'react';
import ReactDOM from 'react-dom/client';  // Import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';  // Import the App component
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);