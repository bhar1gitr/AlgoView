import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Heading, Text, Spinner, Flex, Wrap, WrapItem, Center } from '@chakra-ui/react';
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
      <Wrap spacing='30px' justify='center' padding={{lg:'0px 300px',base:'0px 40px'}}>
        <WrapItem alignItems="center" padding={{lg:'0px 50px'}}>
          <FontAwesomeIcon color='yellow' icon={faStar} style={{ marginRight: '0.5rem' }} />
          <Text color='yellow'>Stars: {repoStats.stargazers_count}</Text>
        </WrapItem>
        <WrapItem alignItems="center" padding={{lg:'0px 50px'}}>
          <FontAwesomeIcon color='white' icon={faEye} style={{ marginRight: '0.5rem' }} />
          <Text color='white'>Watchers: {repoStats.watchers_count}</Text>
        </WrapItem>
        <WrapItem alignItems="center" padding={{lg:'0px 50px'}}>
          <FontAwesomeIcon color='green' icon={faCodeBranch} style={{ marginRight: '0.5rem' }} />
          <Text color='green'>Forks: {repoStats.forks_count}</Text>
        </WrapItem>
        <WrapItem alignItems="center" padding={{lg:'0px 50px'}}>
          <FontAwesomeIcon color='red' icon={faExclamationCircle} style={{ marginRight: '0.5rem' }} />
          <Text color='red'>Open Issues: {repoStats.open_issues_count}</Text>
        </WrapItem>
      </Wrap>
    </Box>
  );
};

export default GitHubRepoStats;
