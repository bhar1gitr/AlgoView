import React, { useState } from 'react';
import { VStack, Input, Text } from '@chakra-ui/react';

import "../App.css";

const FlipCardsSpaceComplexity = () => {
  const [cards, setCards] = useState([
    { id: 1, frontText: 'Bubble Sort', spaceComplexity: 'O(1)', isFlipped: false },
    { id: 2, frontText: 'Selection Sort', spaceComplexity: 'O(1)', isFlipped: false },
    { id: 3, frontText: 'Insertion Sort', spaceComplexity: 'O(1)', isFlipped: false },
    { id: 4, frontText: 'Merge Sort', spaceComplexity: 'O(n)', isFlipped: false },
    { id: 5, frontText: 'Quick Sort', spaceComplexity: 'O(log n)', isFlipped: false },
    { id: 6, frontText: 'Heap Sort', spaceComplexity: 'O(1)', isFlipped: false },
    { id: 7, frontText: 'Radix Sort', spaceComplexity: 'O(n + k)', isFlipped: false },
    { id: 8, frontText: 'Counting Sort', spaceComplexity: 'O(k)', isFlipped: false },
    { id: 9, frontText: 'Linear Search', spaceComplexity: 'O(1)', isFlipped: false },
    { id: 10, frontText: 'Binary Search', spaceComplexity: 'O(1)', isFlipped: false },
    { id: 11, frontText: 'Depth-First Search (DFS)', spaceComplexity: 'O(V)', isFlipped: false },
    { id: 12, frontText: 'Breadth-First Search (BFS)', spaceComplexity: 'O(V)', isFlipped: false },
    { id: 13, frontText: "Dijkstra's Algorithm", spaceComplexity: 'O(V)', isFlipped: false },
    { id: 14, frontText: 'Bellman-Ford Algorithm', spaceComplexity: 'O(V)', isFlipped: false },
    { id: 15, frontText: 'Floyd-Warshall Algorithm', spaceComplexity: 'O(V^2)', isFlipped: false },
    { id: 16, frontText: "Kruskal's Algorithm", spaceComplexity: 'O(V + E)', isFlipped: false },
    { id: 17, frontText: "Prim's Algorithm", spaceComplexity: 'O(V + E)', isFlipped: false },
    { id: 18, frontText: 'Topological Sorting', spaceComplexity: 'O(V + E)', isFlipped: false },
    { id: 19, frontText: "Tarjan's Algorithm", spaceComplexity: 'O(V + E)', isFlipped: false },
    { id: 20, frontText: 'Articulation Points and Bridges', spaceComplexity: 'O(V + E)', isFlipped: false },
    { id: 21, frontText: 'Bipartite Graph Checking', spaceComplexity: 'O(V + E)', isFlipped: false },
    { id: 22, frontText: 'Fibonacci Series', spaceComplexity: 'O(1)', isFlipped: false },
    { id: 23, frontText: 'Longest Common Subsequence (LCS)', spaceComplexity: 'O(mn)', isFlipped: false },
    { id: 24, frontText: 'Knapsack Problem', spaceComplexity: 'O(mW)', isFlipped: false },
    { id: 25, frontText: 'Coin Change Problem', spaceComplexity: 'O(mn)', isFlipped: false },
    { id: 26, frontText: 'Edit Distance', spaceComplexity: 'O(mn)', isFlipped: false },
    { id: 27, frontText: 'Matrix Chain Multiplication', spaceComplexity: 'O(n^2)', isFlipped: false },
    { id: 28, frontText: 'Longest Increasing Subsequence (LIS)', spaceComplexity: 'O(n)', isFlipped: false },
    { id: 29, frontText: 'Tree Traversal (Inorder, Preorder, Postorder)', spaceComplexity: 'O(n)', isFlipped: false },
    { id: 30, frontText: 'Binary Search Tree (BST) Operations', spaceComplexity: 'O(n)', isFlipped: false },
    { id: 31, frontText: 'AVL Trees (Balanced Binary Search Trees)', spaceComplexity: 'O(n)', isFlipped: false },
    { id: 32, frontText: 'Red-Black Trees', spaceComplexity: 'O(n)', isFlipped: false },
    { id: 33, frontText: 'Segment Trees', spaceComplexity: 'O(n)', isFlipped: false },
    { id: 34, frontText: 'Fenwick Trees (Binary Indexed Trees)', spaceComplexity: 'O(n)', isFlipped: false },
    { id: 35, frontText: 'Trie (Prefix Tree)', spaceComplexity: 'O(alphabet_size * n)', isFlipped: false },
    { id: 36, frontText: 'String Matching Algorithms (Naive, KMP, Rabin-Karp)', spaceComplexity: 'O(n + m)', isFlipped: false },
    { id: 37, frontText: 'Longest Common Substring', spaceComplexity: 'O(min(n, m))', isFlipped: false },
    { id: 38, frontText: 'Longest Palindromic Substring', spaceComplexity: 'O(n)', isFlipped: false },
    { id: 39, frontText: 'String Compression', spaceComplexity: 'O(1)', isFlipped: false },
    { id: 40, frontText: 'Pattern Searching', spaceComplexity: 'O(n + m)', isFlipped: false },
   
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
                  <p className="card-text">Space Complexity: {card.spaceComplexity}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </VStack>
  );
};

export default FlipCardsSpaceComplexity;