import React, { useState, useEffect } from 'react';
import { Box, Heading, List, ListItem, Button, Text } from '@chakra-ui/react';
import api from '../api/axios';

function PredictPage() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const response = await api.get('/fixtures', {
          params: {
            league: '39',  // EPL League ID
            season: '2023', // Season
            round: 'Regular Season - 1', // Round number or description
          },
        });
        setGames(response.data.response || []); // API returns fixtures in response.data.response
        setLoading(false);
      } catch (error) {
        console.error('Error fetching fixtures:', error);
        setLoading(false);
      }
    };

    fetchFixtures();
  }, []);

  const handlePrediction = (gameId, prediction) => {
    console.log(`Game ID: ${gameId}, Prediction: ${prediction}`);
    // TODO: Store this prediction in your backend
  };

  if (loading) return <Text>Loading...</Text>;

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>
        Make Your Predictions
      </Heading>
      <List spacing={3}>
        {games.map(game => (
          <ListItem key={game.fixture.id} mb={4}>
            <Text mb={2}>
              {game.teams.home.name} vs {game.teams.away.name}
            </Text>
            <Button colorScheme="teal" onClick={() => handlePrediction(game.fixture.id, 'home')}>
              Home Win
            </Button>
            <Button colorScheme="teal" onClick={() => handlePrediction(game.fixture.id, 'away')}>
              Away Win
            </Button>
            <Button colorScheme="teal" onClick={() => handlePrediction(game.fixture.id, 'draw')}>
              Draw
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default PredictPage;