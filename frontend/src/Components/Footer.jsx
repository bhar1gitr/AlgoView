import { Box, Text, Link, VStack, HStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      width="100%"
      color="white"
      py={4}
      px={8}
      bg="#0A1B1E"
      textAlign="center"
    >
      <VStack spacing={2}>
        <Text fontSize="sm">© 2024 AlgoView</Text>
      </VStack>
    </Box>
  );
};

export default Footer;
