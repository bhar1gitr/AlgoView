import React, { useState, useEffect } from 'react';
import { Button, VStack, Text, Box, Input, Flex, Select, SimpleGrid, GridItem } from '@chakra-ui/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const LinearSearch = () => {
    
    const [array, setArray] = useState([4, 2, 7, 1, 9, 5, 3]);
    const [searchValue, setSearchValue] = useState('');
    const [searchIndex, setSearchIndex] = useState(-1);
    const [currentSearchIndex, setCurrentSearchIndex] = useState(-1);
    const [selectedLanguage, setSelectedLanguage] = useState('java');
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        setSelectedCard('java'); // Set default selected card to 'Java'
    }, []);

    const codeMap = {
        java: `// Java code
public class LinearSearch {
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
}`,
        python: `# Python code
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i  # Element found, return the index
    return -1  # Element not found

arr = [5, 12, 8, 3, 9, 6]
target = 9
result = linear_search(arr, target)
if result != -1:
    print(f"Element found at index: {result}")
else:
    print("Element not found in the array.")`,
        javascript: `// JavaScript code
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Element found, return the index
        }
    }
    return -1; // Element not found
}

const arr = [5, 12, 8, 3, 9, 6];
const target = 9;
const result = linearSearch(arr, target);
if (result !== -1) {
    console.log("Element found at index: " + result);
} else {
    console.log("Element not found in the array.");
}` };

    const timeComplexityMap = {
        java: 'Time Complexity: O(n) - Linear Search has a time complexity of O(n) in the worst case, where "n" is the size of the array.',
        python: 'Time Complexity: O(n) - The time complexity of Linear Search in Python is O(n) in the worst case, where "n" is the length of the array.',
        javascript: 'Time Complexity: O(n) - In JavaScript, Linear Search has a time complexity of O(n) in the worst case, where "n" is the length of the array.'
    };

    const linearSearch = async () => {
        for (let i = 0; i < array.length; i++) {
            setCurrentSearchIndex(i);
            if (array[i] === parseInt(searchValue)) {
                setSearchIndex(i);
                setCurrentSearchIndex(-1);
                return;
            }
            await new Promise((resolve) => setTimeout(resolve, 500));
        }
        setSearchIndex(-1);
        setCurrentSearchIndex(-1);
    };

    const handleLanguageChange = (lang) => {
        setSelectedLanguage(lang);
        setSelectedCard(lang);
    };

    return (
        <>
            <VStack height="max-content" bg="#0A1B1E" p={20} spacing={4} >
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
                    <Button
                        colorScheme="teal"
                        onClick={linearSearch}
                    >
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
                                    ? 'orange.500'
                                    : searchIndex === index
                                    ? 'teal.500'
                                    : 'gray.300'
                            }
                            bg={
                                currentSearchIndex === index
                                    ? 'orange.100'
                                    : searchIndex === index
                                    ? 'teal.50'
                                    : 'white'
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

                <div>
                <Select
                    color="#fff"
                    value={selectedLanguage}
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    className='language'
                >
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                    <option value="javascript">JavaScript</option>
                </Select>
                </div>

                {selectedCard && (
                    <Box p={4} borderWidth="1px" borderRadius="md" bg="#2D3C3F" width={900}>
                        <Text mt={2} color="#EAEBEA" fontSize="sm">
                            Code:
                        </Text>
                        <SyntaxHighlighter language={selectedLanguage} style={docco} >
                            {codeMap[selectedLanguage]}
                        </SyntaxHighlighter>
                        <Text mt={2} color="#EAEBEA" fontSize="sm">
                            {timeComplexityMap[selectedLanguage]}
                        </Text>
                    </Box>
                )}
            </VStack>
        </>
    );
};

export default LinearSearch;
