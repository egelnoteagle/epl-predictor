import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PredictPage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Fetch the current week's games from the backend
    axios.get('/api/games')
      .then(response => setGames(response.data))
      .catch(error => console.error('Error fetching games:', error));
  }, []);

  const handlePrediction = (gameId, prediction) => {
    // Logic to handle predictions
    console.log(`Game ID: ${gameId}, Prediction: ${prediction}`);
  };

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