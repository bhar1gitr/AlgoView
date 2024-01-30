// Import necessary Chakra UI components
// hiiiiiii
//hi

// byee
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
import Logo from "../assets/algo1.png";
import "../App.css";
  const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
     <>
       <Box bg="#0A1B1E" p={2}>
        <Flex alignItems="center" justifyContent="space-between">
          <div className="logo"></div> 
          <span>Algo</span>
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
  