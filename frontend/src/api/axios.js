import axios from 'axios';

const api = axios.create({
  baseURL: 'https://v3.football.api-sports.io',
  headers: {
    'x-apisports-key': process.env.REACT_APP_API_FOOTBALL_KEY, // Ensure this key is in your .env file
  },
});

export default api;