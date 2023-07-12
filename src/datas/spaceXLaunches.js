import axios from 'axios';
export const getLatestLaunche = async () => {
  try {
    return (await axios.get('https://api.spacexdata.com/v5/launches/latest'))
      .data;
  } catch (error) {
    console.error(error);
  }
};
export const getLaunches = async () => {
  try {
    return (await axios.get('https://api.spacexdata.com/v5/launches')).data;
  } catch (error) {
    console.error(error);
  }
};
export const getLaunche = async (id) => {
  try {
    return (await axios.get(`https://api.spacexdata.com/v5/launches/${id}`))
      .data;
  } catch (error) {
    console.error(error);
  }
};
