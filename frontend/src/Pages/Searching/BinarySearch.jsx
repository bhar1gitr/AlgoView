import React, { useState, useEffect } from 'react';
import { Button, VStack, Text, Box, Input, Flex, Select, SimpleGrid, GridItem } from '@chakra-ui/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const BinarySearch = () => {
    const [sortedArray, setSortedArray] = useState([1, 2, 3, 4, 5, 6, 7, 9]);
    const [searchValue, setSearchValue] = useState('');
    const [searchIndex, setSearchIndex] = useState(-1);
    const [currentSearchIndex, setCurrentSearchIndex] = useState(-1);
    const [selectedLanguage, setSelectedLanguage] = useState('java');
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        setSelectedCard('python'); // Set default selected card to 'Java'
    }, []);

    const codeMap = {
        java: `public class BinarySearch {
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
`,
python: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            return mid  # Element found, return the index
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1  # Element not found

arr = [1, 2, 3, 4, 5, 6, 7, 9]
target = 5
result = binary_search(arr, target)
if result != -1:
    print(f"Element found at index: {result}")
else:
    print("Element not found in the array.")
`,   javascript: `function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Element found, return the index
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; // Element not found
}

const arr = [1, 2, 3, 4, 5, 6, 7, 9];
const target = 5;
const result = binarySearch(arr, target);
if (result !== -1) {
    console.log("Element found at index: " + result);
} else {
    console.log("Element not found in the array.");
}
`

        // Add code for other languages (Python, JavaScript) here
    };

    const timeComplexityMap = {
        java: 'Time Complexity: O(log n) - Binary Search has a time complexity of O(log n) in the worst case, where "n" is the size of the array.',
        python: 'Time Complexity: O(log n) - The time complexity of Binary Search in Python is O(log n) in the worst case, where "n" is the length of the array.',
    javascript: 'Time Complexity: O(log n) - In JavaScript, Binary Search has a time complexity of O(log n) in the worst case, where "n" is the length of the array.'
        // Add time complexity for other languages here
    };

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

    const handleLanguageChange = (lang) => {
        setSelectedLanguage(lang);
        setSelectedCard(lang);
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
                        {/* Add options for other languages here */}
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

export default BinarySearch;
