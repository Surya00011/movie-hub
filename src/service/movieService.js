// service/movieService.js
import axios from 'axios';

const BASE_URL = 'https://www.apirequest.in/movie/api';

export const getAllMovies = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    console.error('Error in getAllMovies:', error);
    throw error;
  }
};
