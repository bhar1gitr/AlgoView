import React from 'react';
import { Select, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  return (
    <HStack spacing={4}>
      <Select placeholder="Search">
        <option value="linear-search">
          {/* <Link to="/linear-search">Linear Search</Link> */}
        </option>
        <option value="binary-search">
          {/* <Link to="/binary-search">Binary Search</Link> */}
        </option>
      </Select>
      <Select placeholder="Sort">
        <option value="bubble-sort">
          {/* <Link to="/bubble-sort">Bubble Sort</Link> */}
        </option>
      </Select>
    </HStack>
  );
};

export default Dropdown;
