import React, { useState, useEffect } from 'react';
import api from '../api/axios';

function PredictPage() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the current week's games from the backend
    api.get('/games')
      .then(response => {
        setGames(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching games:', error);
        setLoading(false);
      });
  }, []);

  const handlePrediction = (gameId, prediction) => {
    // Handle prediction logic (you can send the prediction to the backend here)
    console.log(`Game ID: ${gameId}, Prediction: ${prediction}`);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Make Your Predictions</h1>
      <ul>
        {games.map(game => (
          <li key={game.id}>
            {game.homeTeam} vs {game.awayTeam}
            <button onClick={() => handlePrediction(game.id, 'home')}>Home Win</button>
            <button onClick={() => handlePrediction(game.id, 'away')}>Away Win</button>
            <button onClick={() => handlePrediction(game.id, 'draw')}>Draw</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PredictPage;