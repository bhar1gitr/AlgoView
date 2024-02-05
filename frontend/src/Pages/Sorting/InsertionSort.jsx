import React, { useState, useRef } from 'react';
import { VStack, Text, Button, Box, Input, Flex } from '@chakra-ui/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const InsertionSort = () => {
    const [array, setArray] = useState([4, 2, 7, 1, 9, 5, 3]);
    const [currentSortIndex, setCurrentSortIndex] = useState(-1);
    const [isSorting, setIsSorting] = useState(false);
    const [sortedArray, setSortedArray] = useState([]);
    const [randomArraySize, setRandomArraySize] = useState(7);
    const audioRef = useRef(null);

    const generateRandomArray = () => {
        const randomArray = Array.from({ length: randomArraySize }, () => Math.floor(Math.random() * 20) + 1);
        setArray(randomArray);
        setSortedArray([]);
    };

    const insertionSort = async () => {
      setIsSorting(true);
      const n = array.length;
  
      for (let i = 1; i < n; i++) {
          let key = array[i];
          let j = i - 1;
  
          setCurrentSortIndex(i);
  
          while (j >= 0 && array[j] > key) {
              setArray((prevArray) => {
                  const newArray = [...prevArray];
                  newArray[j + 1] = newArray[j];
                  newArray[j] = key;
                  return newArray;
              });
  
              audioRef.current.src = '/sounds/swappingsound.mp3';
              audioRef.current.play();
  
              await new Promise((resolve) => setTimeout(resolve, 800));
  
              j = j - 1;
          }
  
          // Place the key element in its correct position
          setArray((prevArray) => {
              const newArray = [...prevArray];
              newArray[j + 1] = key;
              return newArray;
          });
  
          // Use setTimeout to create a delay for visual effect
          await new Promise((resolve) => setTimeout(resolve, 800));
      }
  
      setCurrentSortIndex(-1);
      setIsSorting(false);
      setSortedArray([...array]);
  };
  
  

    return (
        <>
            <VStack height="max-content" bg="#0A1B1E" p={20} spacing={4} align="center">
                <Text color="#fff" fontSize="xl" fontWeight="bold">
                    Insertion Sort Visualization
                </Text>
                <Flex>
                    <Input
                        color="#fff"
                        type="number"
                        placeholder="Enter array size"
                        value={randomArraySize}
                        onChange={(e) => setRandomArraySize(e.target.value)}
                        _placeholder={{
                            color: '#fff',
                            opacity: '0.7',
                        }}
                    />
                    <Button
                        ml={5}
                        bg="#6F8784"
                        width="150px"
                        colorScheme="teal"
                        fontSize={15}
                        onClick={generateRandomArray}
                    >
                        Random Array
                    </Button>
                </Flex>
                <Flex>
                    <Button
                        ml={2}
                        bg="#6F8784"
                        colorScheme="teal"
                        onClick={insertionSort}
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
                                currentSortIndex === index
                                    ? 'orange.500'
                                    : sortedArray.length > 0 && sortedArray.includes(value)
                                    ? 'teal.500'
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
                            public class InsertionSort {
                                public static void insertionSort(int[] array) {
                                    int n = array.length;
                                    for (int i = 1; i < n; i++) {
                                        int key = array[i];
                                        int j = i - 1;
                                        while (j >= 0 && array[j] > key) {
                                            array[j + 1] = array[j];
                                            j = j - 1;
                                        }
                                        array[j + 1] = key;
                                    }
                                }
                                
                                public static void main(String[] args) {
                                    int[] array = {4, 2, 7, 1, 9, 5, 3};
                                    insertionSort(array);
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

export default InsertionSort;
