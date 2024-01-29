import React, { useState } from 'react';
import { VStack, Text, Button, Box, Input, Flex } from '@chakra-ui/react';
import Navbar from '../../Components/Navbar';

const LinearSearch = () => {
  const [array, setArray] = useState([4, 2, 7, 1, 9, 5, 3]);
  const [searchValue, setSearchValue] = useState('');
  const [searchIndex, setSearchIndex] = useState(-1);

  const linearSearch = () => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === parseInt(searchValue)) {
        setSearchIndex(i);
        return;
      }
    }
    setSearchIndex(-1);
  };

  return (
    <>
      <Navbar />
      <VStack height="93vh" bg="#0A1B1E" p={20} spacing={4} align="center">
        <Text color="#EAEBEA" fontSize="xl" fontWeight="bold">
          Linear Search Visualization
        </Text>
        <Flex>
          <Input
            color="#FFFFFF"
            type="number"
            placeholder="Enter value to search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button ml={2} bg="#6F8784" colorScheme="teal" onClick={linearSearch}>
            Search
          </Button>
        </Flex>
        <Box>
          {array.map((value, index) => (
            <Box
              key={index}
              display="inline-block"
              textAlign="center"
              p={4}
              borderRadius="md"
              border="1px solid"
              borderColor={searchIndex === index ? 'teal.500' : 'gray.300'}
              bg={searchIndex === index ? 'teal.50' : 'white'}
              ml={2}
            >
              {value}
            </Box>
          ))}
        </Box>
        {searchIndex !== -1 ? (
          <Text mt={2} color="teal.500">
            Element found at index {searchIndex}.
          </Text>
        ) : (
          <Text mt={2} color="red.500">
            Element not found.
          </Text>
        )}
      </VStack>
    </>
  );
};

export default LinearSearch;
