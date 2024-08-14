import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ... add custom colors here
      900: "#1a202c",
    },
  },
});

export default theme;