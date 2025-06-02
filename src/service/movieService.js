import axios from 'axios';

const BASE_URL = 'https://www.apirequest.in/movie/api';


export const getAllMovies = async () => {
  try {
    const response = await axios.get(BASE_URL); 
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getMovieByTitle = async (title) => {
  try {
    const response = await axios.get(`${BASE_URL}/title/${encodeURIComponent(title)}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
