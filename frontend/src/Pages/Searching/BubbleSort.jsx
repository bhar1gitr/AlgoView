import React, { useState, useRef } from 'react';
import { VStack, Text, Button, Box, Input, Flex } from '@chakra-ui/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const BubbleSort = () => {
    const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 9]);
    const [currentComparison, setCurrentComparison] = useState([]);
    const [currentSwap, setCurrentSwap] = useState([]);
    const [isSorting, setIsSorting] = useState(false);
    const [animations, setAnimations] = useState([]);
    const [sortedArray, setSortedArray] = useState([]);
    const [randomArraySize, setRandomArraySize] = useState(8);

    const audioRef = useRef(null);

    const generateRandomArray = () => {
        const randomArray = Array.from({ length: randomArraySize }, () => Math.floor(Math.random() * 20) + 1);
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

                if (array[j] > array[j + 1]) {
                    setCurrentSwap([j, j + 1]);
                    audioRef.current.src = '/sounds/swappingsound.mp3';
                    audioRef.current.play();

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

    return (
        <>
            <VStack height="max-content" bg="#0A1B1E" p={20} spacing={4} align="center">
                <Text color="#fff" fontSize="xl" fontWeight="bold">
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
                    <Button ml={5} bg="#6F8784"  width="150px" colorScheme="teal" fontSize={15} onClick={generateRandomArray} >
                        Random Array
                    </Button>
                </Flex>
                <Flex>
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
                <Box width="100%" height="10%">
                    <SyntaxHighlighter language="java" style={docco}>
                        {`
public class BubbleSort {
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
                        `}
                    </SyntaxHighlighter>
                </Box>
            </VStack>
        </>
    );
};

export default BubbleSort;
