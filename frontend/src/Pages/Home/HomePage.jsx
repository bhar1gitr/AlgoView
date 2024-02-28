import React from 'react';
import axios from 'axios';
import { Box, Flex, Heading, Text, Spinner, Button } from '@chakra-ui/react';
import Contributers from './Contributers';
import RepoStats from './RepoStats';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Flex className='home-hero' flex="0 0 300px" paddingTop='40px' paddingBottom='40px' bg='#0A1B1E'>
        <Box width='50%' padding={{lg:'140px 100px',base:'40px 20px'}}>
          <Heading margin='10px 0px' as="h2" size="lg" color='white'>AlgoView</Heading>
          <Text color='white'>The ultimate resource to prepare for DSA. Everything you need, in one streamlined platform.</Text>
          <Button colorScheme="teal" variant="solid" size="lg" marginTop='20px'><Link to='https://github.com/bhar1gitr/AlgoView'>Get Started</Link></Button>
        </Box>
        <Box className='left-move' color='white' width="50%">
          <marquee scrollamount="7"><span>#queue</span></marquee>
          <marquee scrollamount="6"><span>#stack</span></marquee>
          <marquee scrollamount="2"><span>#tree</span></marquee>
          <marquee scrollamount="5"><span>#dsa</span></marquee>
          <marquee scrollamount="2"><span>#graphs</span></marquee>
          <marquee scrollamount="4"><span>#linkedlist</span></marquee>
          <marquee scrollamount="5"><span>#dynamicprogramming</span></marquee>
          <marquee scrollamount="4"><span>#array</span></marquee>
          <marquee scrollamount="5"><span>#heap</span></marquee>
          <marquee scrollamount="4"><span>#recursion</span></marquee>
        </Box>
      </Flex>
      <RepoStats></RepoStats>
      <Contributers></Contributers>
    </>
  );
};

export default Home;
