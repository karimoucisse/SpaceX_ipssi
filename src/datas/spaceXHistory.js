import axios from 'axios';
export const getHistories = async () => {
  try {
    return (await axios.get(`https://api.spacexdata.com/v4/history`)).data;
  } catch (error) {
    console.error(error);
  }
};

export const getHistory = async (id) => {
  try {
    return (await axios.get(`https://api.spacexdata.com/v4/history/${id}`)).data;
  } catch (error) {
    console.error(error);
  }
}
