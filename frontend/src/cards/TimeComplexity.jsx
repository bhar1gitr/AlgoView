import React, { useState } from 'react';
import { VStack, Input, Text } from '@chakra-ui/react';

import "../App.css";

const FlipCards = () => {
  const [cards, setCards] = useState([
    { id: 1, frontText: 'Bubble Sort', backText: 'O(n^2)', isFlipped: false },
    { id: 2, frontText: 'Selection Sort', backText: 'O(n^2)', isFlipped: false },
    { id: 3, frontText: 'Insertion Sort', backText: 'O(n^2)', isFlipped: false },
    { id: 4, frontText: 'Merge Sort', backText: 'O(n log n)', isFlipped: false },
    { id: 5, frontText: 'Quick Sort', backText: 'O(n^2) in worst case, O(n log n) on average', isFlipped: false },
    { id: 6, frontText: 'Heap Sort', backText: 'O(n log n)', isFlipped: false },
    { id: 7, frontText: 'Radix Sort', backText: 'O(kn)', isFlipped: false },
    { id: 8, frontText: 'Counting Sort', backText: 'O(n + k)', isFlipped: false },
    
    // Searching Algorithms
    { id: 9, frontText: 'Linear Search', backText: 'O(n)', isFlipped: false },
    { id: 10, frontText: 'Binary Search', backText: 'O(log n)', isFlipped: false },
    { id: 11, frontText: 'Depth-First Search (DFS)', backText: 'O(V + E)', isFlipped: false },
    { id: 12, frontText: 'Breadth-First Search (BFS)', backText: 'O(V + E)', isFlipped: false },
  
    // Graph Algorithms
    { id: 13, frontText: "Dijkstra's Algorithm", backText: 'O((V + E) * log V)', isFlipped: false },
    { id: 14, frontText: 'Bellman-Ford Algorithm', backText: 'O(VE)', isFlipped: false },
    { id: 15, frontText: 'Floyd-Warshall Algorithm', backText: 'O(V^3)', isFlipped: false },
    { id: 16, frontText: "Kruskal's Algorithm", backText: 'O(E log V)', isFlipped: false },
    { id: 17, frontText: "Prim's Algorithm", backText: 'O((V + E) * log V)', isFlipped: false },
    { id: 18, frontText: 'Topological Sorting', backText: 'O(V + E)', isFlipped: false },
    { id: 19, frontText: "Tarjan's Algorithm", backText: 'O(V + E)', isFlipped: false },
    { id: 20, frontText: 'Articulation Points and Bridges', backText: 'O(V + E)', isFlipped: false },
    { id: 21, frontText: 'Bipartite Graph Checking', backText: 'O(V + E)', isFlipped: false },
  
    // Dynamic Programming
    { id: 22, frontText: 'Fibonacci Series', backText: 'O(n)', isFlipped: false },
    { id: 23, frontText: 'Longest Common Subsequence (LCS)', backText: 'O(mn)', isFlipped: false },
    { id: 24, frontText: 'Knapsack Problem', backText: 'O(mW)', isFlipped: false },
    { id: 25, frontText: 'Coin Change Problem', backText: 'O(mn)', isFlipped: false },
    { id: 26, frontText: 'Edit Distance', backText: 'O(mn)', isFlipped: false },
    { id: 27, frontText: 'Matrix Chain Multiplication', backText: 'O(n^3)', isFlipped: false },
    { id: 28, frontText: 'Longest Increasing Subsequence (LIS)', backText: 'O(n log n)', isFlipped: false },
  
    // Tree Algorithms
    { id: 29, frontText: 'Tree Traversal (Inorder, Preorder, Postorder)', backText: 'O(n)', isFlipped: false },
    { id: 30, frontText: 'Binary Search Tree (BST) Operations', backText: 'O(log n)', isFlipped: false },
    { id: 31, frontText: 'AVL Trees (Balanced Binary Search Trees)', backText: 'O(log n)', isFlipped: false },
    { id: 32, frontText: 'Red-Black Trees', backText: 'O(log n)', isFlipped: false },
    { id: 33, frontText: 'Segment Trees', backText: 'O(n log n)', isFlipped: false },
    { id: 34, frontText: 'Fenwick Trees (Binary Indexed Trees)', backText: 'O(log n)', isFlipped: false },
    { id: 35, frontText: 'Trie (Prefix Tree)', backText: 'O(n)', isFlipped: false },
  
    // String Algorithms
    { id: 36, frontText: 'String Matching Algorithms (Naive, KMP, Rabin-Karp)', backText: 'O(n + m)', isFlipped: false },
    { id: 37, frontText: 'Longest Common Substring', backText: 'O(nm)', isFlipped: false },
    { id: 38, frontText: 'Longest Palindromic Substring', backText: 'O(n^2)', isFlipped: false },
    { id: 39, frontText: 'String Compression', backText: 'O(n)', isFlipped: false },
    { id: 40, frontText: 'Pattern Searching', backText: 'O(n + m)', isFlipped: false },
  
    // Greedy Algorithms
    { id: 41, frontText: 'Activity Selection', backText: 'O(n log n)', isFlipped: false },
    { id: 42, frontText: 'Fractional Knapsack', backText: 'O(n log n)', isFlipped: false },
    { id: 43, frontText: 'Huffman Coding', backText: 'O(n log n)', isFlipped: false },
    { id: 44, frontText: 'Job Sequencing with Deadlines', backText: 'O(n^2)', isFlipped: false },
    { id: 45, frontText: 'Minimum Spanning Tree Algorithms (Prim\'s, Kruskal\'s)', backText: 'O(E log V)', isFlipped:false },
  
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCardClick = (id) => {
    console.log('Card clicked:', id);
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isFlipped: !card.isFlipped } : card
      )
    );
  };

  const filteredCards = cards.filter((card) =>
    card.frontText.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log('Filtered cards:', filteredCards);

  return (
    <VStack height="max-content" bg="#0A1B1E" p={20} spacing={4} align="center">
      <Input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        bg="white"
        color="black"
        borderRadius="md"
        p={2}
        width="300px"
      />
      <div className="flip-cards-container">
        {filteredCards.length === 0 ? (
          <Text color="white">No cards found</Text>
        ) : (
          filteredCards.map((card) => (
            <div
              key={card.id}
              className={`flip-card ${card.isFlipped ? 'flipped' : ''}`}
              onClick={() => handleCardClick(card.id)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="card-text">{card.frontText}</p>
                </div>
                <div className="flip-card-back">
                  <p className="card-text">Time Complexity: {card.backText}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </VStack>
  );
};
export default FlipCards;



