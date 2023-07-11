import axios from 'axios';
export const getCrew = async (city, selectValue) => {
  try {
    let url = 'https://api.spacexdata.com/v4/crew';
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
