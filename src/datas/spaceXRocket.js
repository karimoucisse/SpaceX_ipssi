import axios from 'axios';
export const getRockets = async () => {
  try {
    return (await axios.get('https://api.spacexdata.com/v4/rockets')).data;
  } catch (error) {
    console.error(error);
  }
};
export const getRocket = async (id) => {
  try {
    return (await axios.get(`https://api.spacexdata.com/v4/rockets/${id}`)).data;
  } catch (error) {
    console.error(error);
  }
};
