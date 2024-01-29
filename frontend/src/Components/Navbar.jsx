// Import necessary Chakra UI components
import {
    Box,
    Flex,
    HStack,
    VStack,
    Text,
    IconButton,
    useDisclosure,
    Divider
  } from "@chakra-ui/react";
  import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
  
  const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
     <>
       <Box bg="#0A1B1E" p={4}>
        <Flex alignItems="center" justifyContent="space-between">
          {/* Logo or brand */}
          <Text fontSize="2xl" fontWeight="bold" color="white">
            My Logo
          </Text>
          {/* Navigation links (visible on larger screens) */}
         
          <HStack spacing={4} display={{ base: "none", md: "flex" }}>
            <Text color="white">Home</Text>
            <Text color="white">About</Text>
            <Text color="white">Services</Text>
            <Text color="white">Contact</Text>
          </HStack>

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
            <VStack spacing={4} alignItems="flex-end">
          </VStack>
          </VStack>
        </Box>
      </Box>
      <Divider orientation="horizontal"/>
     </>
    );
  };
  
  export default Navbar;
  