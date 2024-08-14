import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

function HomePage() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to the EPL Predictor
      </Heading>
      <Text fontSize="lg" color="gray.600" mb={6}>
        Select "Predict" from the menu to start making your predictions!
      </Text>
      <Button colorScheme="teal" size="lg">
        Get Started
      </Button>
    </Box>
  );
}

export default HomePage;