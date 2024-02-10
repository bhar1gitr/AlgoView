import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Flex, Heading, Text, Spinner } from '@chakra-ui/react';

const RepoStats = () => {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/bhar1gitr/AlgoView`);
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching repo stats:', error);
      }
    };
    fetchData();
  }, []);
  if (!stats) {
    return <Spinner size="lg" />;
  }
  return (
    <>
      <Flex className='home-hero' flex="0 0 300px" bg='#0A1B1E'>
        <Box width='50%'>
          j
        </Box>
        <Box className='left-move' color='white' width="50%">
          <div><marquee scrollamount="1">stack</marquee></div>
          <marquee scrollamount="7"><span>queue</span></marquee>
          <marquee scrollamount="6"><span>graphs</span></marquee>
          <marquee scrollamount="4"><span>graphs</span></marquee>
          <marquee scrollamount="5"><span>graphs</span></marquee>
          <marquee scrollamount="6"><span>graphs</span></marquee>
          <marquee scrollamount="4"><span>graphs</span></marquee>
          <marquee scrollamount="5"><span>graphs</span></marquee>
          <marquee scrollamount="4"><span>graphs</span></marquee>
          <marquee scrollamount="5"><span>graphs</span></marquee>
        </Box>
      </Flex>

      <Flex>
        <Box flex="0 0 300px" backgroundColor="gray.100" p="4">
          <Heading as="h2" size="lg">Repository Stats</Heading>
          <Text>{stats.description}</Text>
          <Text>Stars: {stats.stargazers_count}</Text>
          <Text>Forks: {stats.forks_count}</Text>
          <Text>Watchers: {stats.subscribers_count}</Text>
        </Box>
        <Box flex="1" p="4">
        </Box>
      </Flex>
    </>
  );
};

export default RepoStats;
