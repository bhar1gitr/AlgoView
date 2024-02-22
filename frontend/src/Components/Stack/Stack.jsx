import React, { useState } from 'react';
import { VStack, Button, Text, Box } from '@chakra-ui/react';

const Stack = () => {
  const [stack, setStack] = useState([]);
  const [value, setValue] = useState('');

  const pushToStack = () => {
    if (value !== '') {
      setStack([value, ...stack]); 
      setValue('');
    }
  };

  const popFromStack = () => {
    if (stack.length > 0) {
      setStack(stack.slice(1)); 
    }
  };

  return (
    <VStack spacing={4} align="stretch" maxW="md" mx="auto" mt={8}>
      <Box p={4} shadow="md" borderWidth="1px">
        <Text fontSize="xl" mb={4}>Stack</Text>
        {stack.map((item, index) => (
          <Box key={index} bg="gray.100" p={2} borderRadius="md">
            <Text>{item}</Text>
          </Box>
        ))}
        <Box mt={4}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter value"
          />
          <Button onClick={pushToStack} ml={2}>Push</Button>
          <Button onClick={popFromStack} ml={2}>Pop</Button>
        </Box>
        <Box mt={4} bg="gray.200" p={2} borderRadius="md">
          <Text>Top: {stack.length > 0 ? stack[0] : 'Stack is empty'}</Text>
          <Text>Top - 1: {stack.length > 1 ? stack[1] : 'N/A'}</Text>
        </Box>
      </Box>
    </VStack>
  );
};

export default Stack;
