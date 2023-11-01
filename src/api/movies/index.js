import axios from 'axios';

const API_URL = "https://65219433a4199548356d628d.mockapi.io/";

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}/movies`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};





