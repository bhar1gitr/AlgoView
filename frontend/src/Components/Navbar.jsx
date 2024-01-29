// Import necessary Chakra UI components
import {
    Box,
    Flex,
    Spacer,
    HStack,
    VStack,
    Text,
    Button,
    IconButton,
    useDisclosure,
  } from "@chakra-ui/react";
  import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
  
  const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Box bg="teal.500" p={4}>
        <Flex alignItems="center" justifyContent="space-between">
          {/* Logo or brand */}
          <Text fontSize="2xl" fontWeight="bold" color="white">
            My Logo
          </Text>
  
          {/* Hamburger menu button (visible on small screens) */}
         
  
          {/* Navigation links (visible on larger screens) */}
          <HStack spacing={4} display={{ base: "none", md: "flex" }}>
            <Text color="white">Home</Text>
            <Text color="white">About</Text>
            <Text color="white">Services</Text>
            <Text color="white">Contact</Text>
          </HStack>
  
          {/* Spacer for flexible space */}
          <Spacer />
  
          {/* Additional actions or buttons */}
          <VStack spacing={4} alignItems="flex-end">
            <Button colorScheme="teal" variant="solid">
              Sign In
            </Button>
            <Button colorScheme="teal" variant="outline">
              Sign Up
            </Button>
          </VStack>
        <IconButton
            display={{ base: "block", md: "none" }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
          />
        </Flex>
  
        {/* Responsive menu for small screens */}
        <Box
          display={{ base: isOpen ? "block" : "none", md: "none" }}
          mt={4}
        >
          <VStack spacing={4}>
            <Text color="white">Home</Text>
            <Text color="white">About</Text>
            <Text color="white">Services</Text>
            <Text color="white">Contact</Text>
          </VStack>
        </Box>
      </Box>
    );
  };
  
  export default Navbar;
  