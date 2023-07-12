import axios from 'axios';
export const getCompagny = async () => {
  try {
    return (await axios.get('https://api.spacexdata.com/v4/company')).data;
  } catch (error) {
    console.error(error);
  }
};
