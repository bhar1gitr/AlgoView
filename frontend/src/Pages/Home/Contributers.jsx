import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Box } from '@chakra-ui/react';

const StyledGitHubContributions = styled.div`
  font-family: Arial, sans-serif;

  h2 {
    font-size: 2.5rem;
    color: #333;
    text-align: center;
    padding: 20px 0px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap; /* Wrap li elements into multiple columns */
    justify-content: center; /* Center align the columns */
  }

  li {
    margin: 0 10px 10px 0; /* Add some margin between the columns */
    display: flex;
    align-items: center;
    font-size: 1rem;
  }

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

const GitHubContributions = () => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await axios.get('https://api.github.com/repos/bhar1gitr/AlgoView/contributors');
        setContributions(response.data);
      } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
      }
    };

    fetchContributions();
  }, []);

  // Slice contributions to show only the first 4 contributors
  const visibleContributors = contributions.slice(0, 4);

  return (
    <Box bg="#0A1B1E" color='white'>
      <StyledGitHubContributions>
        <h2>Our Contributors</h2>
        <ul>
          {visibleContributors.map((contribution, index) => (
            <li key={index}>
              <img className="avatar" src={contribution.avatar_url} alt={contribution.login} />
              {contribution.login}
            </li>
          ))}
          {contributions.length > 4 && (
            <li>
              <span>...</span>
            </li>
          )}
        </ul>
      </StyledGitHubContributions>
    </Box>
  );
};

export default GitHubContributions;