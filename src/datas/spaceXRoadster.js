import axios from 'axios';
export const getRoadster = async () => {
  try {
    return (await axios.get('https://api.spacexdata.com/v4/roadster')).data;
  } catch (error) {
    console.error(error);
  }
};
