import { useState } from "react";
import { Box, Button, Text, VStack, HStack } from "@chakra-ui/react";

// Define a binary tree node
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to perform inorder traversal
function inorderTraversal(node, visitedNodes, setVisitedNodes) {
  if (node !== null) {
    inorderTraversal(node.left, visitedNodes, setVisitedNodes);
    setVisitedNodes((prevNodes) => [...prevNodes, node.value]);
    inorderTraversal(node.right, visitedNodes, setVisitedNodes);
  }
}

// Function to generate a sample binary tree
function generateTree() {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  return root;
}

const TreeNodeComponent = ({ value, visited }) => {
  return (
    <Box
      bg={visited ? "teal.300" : "gray.200"}
      p={2}
      borderRadius="md"
      minWidth={8}
      textAlign="center"
    >
      {value}
    </Box>
  );
};

const TreeLevel = ({ node, visitedNodes }) => {
  if (!node) return null;

  return (
    <HStack spacing={4}>
      <TreeNodeComponent
        value={node.value}
        visited={visitedNodes.includes(node.value)}
      />
      <TreeLevel node={node.left} visitedNodes={visitedNodes} />
      <TreeLevel node={node.right} visitedNodes={visitedNodes} />
    </HStack>
  );
};

const TreeTraversal = () => {
  const [visitedNodes, setVisitedNodes] = useState([]);
  const tree = generateTree();

  const handleInorderTraversal = () => {
    setVisitedNodes([]);
    inorderTraversal(tree, visitedNodes, setVisitedNodes);
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="center">
        <Text fontSize="xl">Binary Tree</Text>
        <Box>
          <TreeLevel node={tree} visitedNodes={visitedNodes} />
        </Box>
        <Button colorScheme="teal" onClick={handleInorderTraversal}>
          Perform Inorder Traversal
        </Button>
      </VStack>
    </Box>
  );
};

export default TreeTraversal;
