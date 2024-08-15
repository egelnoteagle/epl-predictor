import React, { useState, useEffect } from 'react';
import { Box, Heading, List, ListItem, Image, Text, Button, HStack } from '@chakra-ui/react';
import api from '../api/axios';

function PredictPage() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const round = 1;  // You can change this dynamically based on user input or the current round
  const userPredictions = {};  // Placeholder for user predictions; this should come from your backend

  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const response = await api.get('/eventsround.php', {
          params: {
            id: '4328',   // EPL League ID
            r: round,     // Round number (week)
            s: '2024-2025', // Season
          },
        });

        if (response.data && response.data.events) {
          const sortedGames = response.data.events.sort((a, b) => {
            const dateA = new Date(`${a.dateEvent} ${a.strTime} UTC`);
            const dateB = new Date(`${b.dateEvent} ${b.strTime} UTC`);
            return dateA - dateB;
          });

          setGames(sortedGames);
        } else {
          console.error('Unexpected API response format', response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching fixtures:', error);
        setLoading(false);
      }
    };

    fetchFixtures();
  }, [round]);

  const convertToUserTimezone = (dateStr, timeStr) => {
    const dateTimeStr = `${dateStr} ${timeStr}`;
    const date = new Date(dateTimeStr + ' UTC'); // Assuming the time from API is in UTC
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: 'short',
    }).format(date);
  };

  const handlePrediction = (gameId, prediction) => {
    if (new Date() > new Date(games.find(game => game.idEvent === gameId).dateEvent + ' ' + games.find(game => game.idEvent === gameId).strTime + ' UTC')) {
      console.log('Prediction time has passed, cannot change prediction.');
      return;
    }
    console.log(`Game ID: ${gameId}, Prediction: ${prediction}`);
    // TODO: Store this prediction in your backend
  };

  const isPredictionDisabled = (game) => {
    const currentTime = new Date();
    const gameTime = new Date(`${game.dateEvent} ${game.strTime} UTC`);
    return currentTime > gameTime;
  };

  const getPredictionText = (gameId) => {
    return userPredictions[gameId] || "No prediction made";
  };

  if (loading) return <Text>Loading...</Text>;

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>
        Predictions for Week {round}
      </Heading>
      <List spacing={3}>
        {games.map(game => (
          <ListItem key={game.idEvent} mb={4}>
            <Text mb={2}>
              {convertToUserTimezone(game.dateEvent, game.strTime)}
            </Text>
            <Box display="flex" alignItems="center" mb={2}>
              <Image src={game.strHomeTeamBadge} alt={`${game.strHomeTeam} logo`} boxSize="50px" mr={4} />
              <Text fontWeight="bold">{game.strHomeTeam}</Text>
              <Text mx={2}>vs</Text>
              <Text fontWeight="bold">{game.strAwayTeam}</Text>
              <Image src={game.strAwayTeamBadge} alt={`${game.strAwayTeam} logo`} boxSize="50px" ml={4} />
            </Box>
            <Text mb={2}>{game.strVenue}</Text>
            {isPredictionDisabled(game) ? (
              <Text>Your Prediction: {getPredictionText(game.idEvent)}</Text>
            ) : (
              <HStack spacing={2}>
                <Button colorScheme="teal" onClick={() => handlePrediction(game.idEvent, 'home')}>
                  {game.strHomeTeam}
                </Button>
                <Button colorScheme="teal" onClick={() => handlePrediction(game.idEvent, 'draw')}>
                  Draw
                </Button>
                <Button colorScheme="teal" onClick={() => handlePrediction(game.idEvent, 'away')}>
                  {game.strAwayTeam}
                </Button>
              </HStack>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default PredictPage;