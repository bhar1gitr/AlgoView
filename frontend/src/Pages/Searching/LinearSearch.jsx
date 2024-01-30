import React, { useState } from 'react';
import { VStack, Text, Button, Box, Input, Flex } from '@chakra-ui/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Navbar from '../../Components/Navbar';

const LinearSearch = () => {
    const [array, setArray] = useState([4, 2, 7, 1, 9, 5, 3]);
    const [searchValue, setSearchValue] = useState('');
    const [searchIndex, setSearchIndex] = useState(-1);
    const [currentSearchIndex, setCurrentSearchIndex] = useState(-1); 
    const codeString = `public class LinearSearch {
    public static int linearSearch(int[] array, int target) {
        for (int i = 0; i < array.length; i++) {
            if (array[i] == target) {
                return i; // Element found, return the index
            }
        }
        return -1; // Element not found
    }
    public static void main(String[] args) {
        int[] array = {5, 12, 8, 3, 9, 6};
        int target = 9;
        int result = linearSearch(array, target);
        if (result != -1) {
            System.out.println("Element found at index: " + result);
        } else {
            System.out.println("Element not found in the array.");
        }
    }
    }
  `;

 const linearSearch = async () => {
    for (let i = 0; i < array.length; i++) {
        setCurrentSearchIndex(i);
        if (array[i] === parseInt(searchValue)) {
            setSearchIndex(i);
            setCurrentSearchIndex(-1);
            return;
        }
        // Use setTimeout to create a delay for visual effect
        await new Promise((resolve) => setTimeout(resolve, 500));
    }
    setSearchIndex(-1);
    setCurrentSearchIndex(-1); 
};

    return (
        <>
            <Navbar />
            <VStack height="max-content" bg="#0A1B1E" p={20} spacing={4} align="center">
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
                            p={2}
                            borderRadius="md"
                            border="1px solid"
                            borderColor={
                                currentSearchIndex === index
                                    ? 'orange.500' // Color for currently searching element
                                    : searchIndex === index
                                    ? 'teal.500' // Color for found element
                                    : 'gray.300' // Default color
                            }
                            bg={
                                currentSearchIndex === index
                                    ? 'orange.100' // Background color for currently searching element
                                    : searchIndex === index
                                    ? 'teal.50' // Background color for found element
                                    : 'white' // Default background color
                            }
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
                <Box width="100%" height="10%">
                    <SyntaxHighlighter language="java" style={docco}>
                        {codeString}
                    </SyntaxHighlighter>
                </Box>
            </VStack>
        </>
    );
};

export default LinearSearch;
