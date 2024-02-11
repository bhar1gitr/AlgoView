import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Heading, Text, Spinner } from '@chakra-ui/react';
import { Doughnut } from 'react-chartjs-2';

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
      <h2 style={{textAlign:'center', color:'white',fontSize:'2.5rem'}}>GitHub Repository Stats</h2>
      <Text>Repository Name: {repoStats.full_name}</Text>
      <Text>Description: {repoStats.description}</Text>
      <Text>Stars: {repoStats.stargazers_count}</Text>
      <Text>Watchers: {repoStats.watchers_count}</Text>
      <Text>Forks: {repoStats.forks_count}</Text>
      <Text>Open Issues: {repoStats.open_issues_count}</Text>
      {/* <Doughnut data={} /> */}
    </Box>
  );
};

export default GitHubRepoStats;
