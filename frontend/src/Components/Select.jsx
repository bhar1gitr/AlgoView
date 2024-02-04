import React from 'react';
import { Select, HStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Dropdown = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <HStack spacing={4}>
      <Select placeholder="Search" onChange={(e) => handleNavigation(e.target.value)}>
        <option value="/linear-search">Linear Search</option>
        <option value="/binary-search">Binary Search</option>
      </Select>
      <Select placeholder="Sort" onChange={(e) => handleNavigation(e.target.value)}>
        <option value="/bubble-sort">Bubble Sort</option>
      </Select>
    </HStack>
  );
};

export default Dropdown;
