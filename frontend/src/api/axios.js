import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.thesportsdb.com/api/v1/json/3',
  headers: {
    'Content-Type': 'application/json',
    'X_API_KEY': process.env.REACT_APP_SPORTSDB_API_KEY, // Pass the API key in the headers
  },
});

export default api;