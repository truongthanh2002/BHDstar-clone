import axios from 'axios';

const API_URL = "https://65219433a4199548356d628d.mockapi.io/";

export const fetchUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/user`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    
  }
};

export const creatUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/user`,user);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
   
  }
};

export const updateUser = async (id,data) => {
  try {
    const response = await axios.put(`${API_URL}/user/${id}`,data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
   
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/user/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
   
  }
};




