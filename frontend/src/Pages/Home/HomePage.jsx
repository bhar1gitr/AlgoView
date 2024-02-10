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
  },[]);

  if (!stats) {
    return <Spinner size="lg" />;
  }

  return (
    <Flex>
      {/* Side panel */}
      <Box flex="0 0 300px" backgroundColor="gray.100" p="4">
        <Heading as="h2" size="lg" mb="4">
          {stats.full_name}
        </Heading>
        <Text>Stars: {stats.stargazers_count}</Text>
        <Text>Forks: {stats.forks_count}</Text>
        <Text>Watchers: {stats.subscribers_count}</Text>
        {/* Add more stats as needed */}
      </Box>
      
      {/* Main content */}
      <Box flex="1" p="4">
        {/* Your main content here */}
      </Box>
    </Flex>
  );
};

export default RepoStats;
