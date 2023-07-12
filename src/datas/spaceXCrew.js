import axios from 'axios';
export const getCrews = async () => {
  try {
    let url = 'https://api.spacexdata.com/v4/crew';
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getCrew = async (id) => {
  try {
    let url = `https://api.spacexdata.com/v4/crew/${id}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
