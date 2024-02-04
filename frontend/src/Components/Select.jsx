import React from 'react';
import { Select, HStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import "./compo.css"

const Dropdown = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <HStack bg="#0A1B1E" style={{padding:'20px 20px'}} spacing={4} align="center">
      <Select
        className='select'
        placeholder="Search"
        iconColor="white"
        width={{ base: '100%', md: 'auto' }}
        onChange={(e) => handleNavigation(e.target.value)}
      >
        <option value="/linear-search">Linear Search</option>
        <option value="/binary-search">Binary Search</option>
      </Select>
      <Select
        className='select'
        placeholder="Sort"
        iconColor="white"
        width={{ base: '100%', md: 'auto' }}
        onChange={(e) => handleNavigation(e.target.value)}
      >
        <option value="/bubble-sort">Bubble Sort</option>
      </Select>
    </HStack>
  );
};

export default Dropdown;
