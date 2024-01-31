import React, { useState } from 'react';
import { VStack, Text, Button, Box, Input, Flex } from '@chakra-ui/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const BinarySearch = () => {
    const [sortedArray, setSortedArray] = useState([1, 2, 3, 4, 5, 6, 7, 9]);
    const [searchValue, setSearchValue] = useState('');
    const [searchIndex, setSearchIndex] = useState(-1);
    const [currentSearchIndex, setCurrentSearchIndex] = useState(-1);
    const codeString = `public class BinarySearch {
    public static int binarySearch(int[] array, int target) {
        int left = 0;
        int right = array.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (array[mid] == target) {
                return mid; // Element found, return the index
            } else if (array[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1; // Element not found
    }
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5, 6, 7, 9};
        int target = 5;
        int result = binarySearch(array, target);
        if (result != -1) {
            System.out.println("Element found at index: " + result);
        } else {
            System.out.println("Element not found in the array.");
        }
    }
}
`;

    const binarySearch = async () => {
        let left = 0;
        let right = sortedArray.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            setCurrentSearchIndex(mid);

            // Use setTimeout to create a delay for visual effect
            await new Promise((resolve) => setTimeout(resolve, 500));

            if (sortedArray[mid] === parseInt(searchValue)) {
                setSearchIndex(mid);
                setCurrentSearchIndex(-1);
                return;
            } else if (sortedArray[mid] < parseInt(searchValue)) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        setSearchIndex(-1);
        setCurrentSearchIndex(-1);
    };

    return (
        <>
           
            <VStack height="max-content" bg="#0A1B1E" p={20} spacing={4} align="center">
                <Text color="#EAEBEA" fontSize="xl" fontWeight="bold">
                    Binary Search Visualization
                </Text>
                <Flex>
                    <Input
                        color="#FFFFFF"
                        type="number"
                        placeholder="Enter value to search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <Button ml={2} bg="#6F8784" colorScheme="teal" onClick={binarySearch}>
                        Search
                    </Button>
                </Flex>
                <Box>
                    {sortedArray.map((value, index) => (
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

export default BinarySearch;
