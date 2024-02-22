import React, { useState, useRef } from 'react';
import { VStack, Text, Button, Box, Input, Flex, Select } from '@chakra-ui/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useToast } from '@chakra-ui/react';

const BubbleSort = () => {
    const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 9]);
    const [currentComparison, setCurrentComparison] = useState([]);
    const [currentSwap, setCurrentSwap] = useState([]);
    const [isSorting, setIsSorting] = useState(false);
    const [animations, setAnimations] = useState([]);
    const [sortedArray, setSortedArray] = useState([]);
    const [randomArraySize, setRandomArraySize] = useState(8);
    const [selectedLanguage, setSelectedLanguage] = useState('java'); // Added state variable
    const audioRef = useRef(null);
    const [selectedCard, setSelectedCard] = useState('java');

    const toast = useToast();

    const codeMap = {
        java: `public class BubbleSort {
    public static void bubbleSort(int[] array) {
        int n = array.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    int temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    }                                
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5, 6, 7, 9};
        bubbleSort(array);
        for (int num : array) {
            System.out.print(num + " ");
        }
    }
}
`,
        python: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

arr = [1, 2, 3, 4, 5, 6, 7, 9]
bubble_sort(arr)
print("Sorted array:", arr)
`,
        javascript: `function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 9];
bubbleSort(arr);
console.log("Sorted array:", arr);
`
    };

    const timeComplexityMap = {
        java: 'Time Complexity: O(n^2) - Bubble Sort has a time complexity of O(n^2) in the worst case, where "n" is the size of the array.',
        python: 'Time Complexity: O(n^2) - The time complexity of Bubble Sort in Python is O(n^2) in the worst case, where "n" is the length of the array.',
        javascript: 'Time Complexity: O(n^2) - In JavaScript, Bubble Sort has a time complexity of O(n^2) in the worst case, where "n" is the length of the array.'
    };

    const generateRandomArray = () => {
        const maxSize = 20; // Set your desired limit for the array size
        const size = Math.min(randomArraySize, maxSize);

        if (randomArraySize > maxSize) {
            toast({
                title: 'Array Size Limit',
                description: `Array size has been limited to ${maxSize}.`,
                status: 'warning',
                duration: 3000, // Toast message will disappear after 3 seconds
                isClosable: true,
            });
        }

        const randomArray = Array.from({ length: size }, () => Math.floor(Math.random() * 20) + 1);
        setArray(randomArray);
        setSortedArray([]);
        setAnimations([]);
        setCurrentComparison([]);
        setCurrentSwap([]);
    };

    const bubbleSort = async () => {
        setIsSorting(true);
        const n = array.length;
        const animations = [];
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                setCurrentComparison([j, j + 1]);
                await new Promise((resolve) => setTimeout(resolve, 800));
                audioRef.current.src = '/sounds/swappingsound.mp3';
                audioRef.current.play();
                if (array[j] > array[j + 1]) {
                    setCurrentSwap([j, j + 1]);
                    await new Promise((resolve) => setTimeout(resolve, 800));
                    const temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    animations.push([...array]);
                }
            }
        }
        setCurrentComparison([]);
        setCurrentSwap([]);
        setIsSorting(false);
        setSortedArray([...array]);
        setAnimations([...animations]);
    };

    const handleLanguageChange = (lang) => {
        setSelectedLanguage(lang);
        setSelectedCard(lang);
    };

    return (
        <>
            <VStack height="max-content" bg="#0A1B1E" p={20} spacing={4} align="center">
                <Text color="#fff" fontSize="xxl" fontWeight="bold">
                    Bubble Sort Visualization
                </Text>
                <Flex>
                    <Input
                        color="#fff"
                        type="number"
                        placeholder="Enter array size"
                        value={randomArraySize}
                        onChange={(e) => setRandomArraySize(e.target.value)}
                        _placeholder={{
                            color: '#fff', // Adjust the color to your preference
                            opacity: '0.7',   // Adjust the opacity if needed
                        }}
                    />
                    <Button ml={2} bg="#6F8784" width="150px" colorScheme="teal" fontSize={15} onClick={generateRandomArray} >
                        Random Array
                    </Button>
                    <Button
                        ml={2}
                        bg="#6F8784"
                        colorScheme="teal"
                        onClick={bubbleSort}
                        disabled={isSorting}
                    >
                        Sort
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
                                currentComparison.includes(index)
                                    ? 'orange.500'
                                    : currentSwap.includes(index)
                                    ? 'red.500'
                                    : 'gray.300'
                            }
                            bg={
                                sortedArray.length > 0 && sortedArray.includes(value)
                                    ? 'teal.50'
                                    : 'white'
                            }
                            ml={2}
                        >
                            {value}
                        </Box>
                    ))}
                </Box>
                <audio ref={audioRef} src="" />
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

export default BubbleSort;
