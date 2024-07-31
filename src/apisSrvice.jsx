import axios from 'axios';

const API_URL = 'https://fitnessontrack.in:9439/api/incomeTitleClient';

export const postData = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const getData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error getting data:", error);
    throw error;
  }
};
