import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Heading, Text, Spinner, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEye, faCodeBranch, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const GitHubRepoStats = () => {
  const [repoStats, setRepoStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepoStats = async () => {
      try {
        const response = await axios.get('https://api.github.com/repos/bhar1gitr/AlgoView');
        setRepoStats(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub repository stats:', error);
        setLoading(false);
      }
    };

    fetchRepoStats();
  }, []);

  if (loading) {
    return (
      <Box textAlign="center" p="4">
        <Spinner size="lg" color="teal" />
      </Box>
    );
  }

  return (
    <Box p="4" bg='#0A1B1E' color='white'>
      <Heading textAlign="center" fontSize="2.5rem" pb="2rem">GitHub Repository</Heading>
      <Flex justifyContent='space-between' alignItems="center" padding='0px 300px'>
        <Flex alignItems="center">
          <FontAwesomeIcon color='yellow' icon={faStar} style={{ marginRight: '0.5rem' }} />
          <Text color='yellow'>Stars: {repoStats.stargazers_count}</Text>
        </Flex>
        <Flex alignItems="center">
          <FontAwesomeIcon color='white' icon={faEye} style={{ marginRight: '0.5rem' }} />
          <Text color='white'>Watchers: {repoStats.watchers_count}</Text>
        </Flex>
        <Flex alignItems="center">
          <FontAwesomeIcon color='green' icon={faCodeBranch} style={{ marginRight: '0.5rem' }} />
          <Text color='green'>Forks: {repoStats.forks_count}</Text>
        </Flex>
        <Flex alignItems="center">
          <FontAwesomeIcon color='red' icon={faExclamationCircle} style={{ marginRight: '0.5rem' }} />
          <Text color='red'>Open Issues: {repoStats.open_issues_count}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default GitHubRepoStats;
