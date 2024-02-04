import React, { useState } from 'react';
import { VStack, Text, Button, Box, Input, Flex, Select } from '@chakra-ui/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Navbar from '../../Components/Navbar';

const LinearSearch = () => {
    const [array, setArray] = useState([4, 2, 7, 1, 9, 5, 3]);
    const [searchValue, setSearchValue] = useState('');
    const [searchIndex, setSearchIndex] = useState(-1);
    const [currentSearchIndex, setCurrentSearchIndex] = useState(-1);
    const [selectedLanguage, setSelectedLanguage] = useState('java');

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
}`
    };

    const linearSearch = async () => {
        // ... (unchanged)
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
                    {/*<Select
                        color="#FFFFFF"
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                    >
                        <option value="java">Java</option>
                        <option value="python">Python</option>
                        <option value="javascript">JavaScript</option>
    </Select>*/}
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
                
                <Select
                        color="#fff"
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        
                        
                        
                    >
                        <option value="java"  >Java</option>
                        <option value="python" >Python</option>
                        <option value="javascript" >JavaScript</option>
                    </Select>
                <Box width="80%" height="10%">
                    <SyntaxHighlighter language={selectedLanguage} style={docco} >
                        {codeMap[selectedLanguage]}
                    </SyntaxHighlighter>
                </Box>
                
                
                
            </VStack>
        </>
    );
};

export default LinearSearch;


