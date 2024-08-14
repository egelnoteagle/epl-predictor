import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api', // Adjust this to match your Flask backend URL
});

export default api;