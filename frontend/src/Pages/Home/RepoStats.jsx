import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GitHubRepoStats = () => {
  const [repoStats, setRepoStats] = useState(null);

//   useEffect(() => {
//     const fetchRepoStats = async () => {
//       try {
//         const response = await axios.get('https://api.github.com/repos/bhar1gitr/AlgoView');
//         setRepoStats(response.data);
//       } catch (error) {
//         console.error('Error fetching GitHub repository stats:', error);
//       }
//     };

//     fetchRepoStats();
//   }, []);

  if (!repoStats) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>GitHub Repository Stats</h2>
      {/* <p>Repository Name: {repoStats.full_name}</p>
      <p>Description: {repoStats.description}</p>
      <p>Stars: {repoStats.stargazers_count}</p>
      <p>Watchers: {repoStats.watchers_count}</p>
      <p>Forks: {repoStats.forks_count}</p>
      <p>Open Issues: {repoStats.open_issues_count}</p> */}
    </div>
  );
};

export default GitHubRepoStats;
