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

export const getLatestLaunchInfo = async (id) => {
  try {
    let launchInfo = { crew: [], capsules: [], payloads: [], launchpad: [] };
    let data = (await axios.get(`https://api.spacexdata.com/v5/launches/${id}`))
      .data;
    const crewInfo = await Promise.all(
      data.crew.map(async (x) => {
        return axios.get(`https://api.spacexdata.com/v4/crew/${x.crew}`);
      }),
    );
    launchInfo.crew = data.crew.map((x, i) => ({
      ...x,
      crew: crewInfo[i].data,
    }));
    const capsuleInfo = await Promise.all(
      data.capsules.map(async (x) => {
        return axios.get(`https://api.spacexdata.com/v4/capsules/${x}`);
      }),
    );
    launchInfo.capsules = capsuleInfo.map((x) => x.data);
    const payloadInfo = await Promise.all(
      data.payloads.map(async (x) => {
        return axios.get(`https://api.spacexdata.com/v4/payloads/${x}`);
      }),
    );
    launchInfo.payloads = payloadInfo.map((x) => x.data);
    launchInfo.launchpad = (
      await axios.get(
        `https://api.spacexdata.com/v4/launchpads/${launchInfo.launchpad}`,
      )
    ).data;
    return launchInfo;
  } catch (e) {
    console.error(e);
  }
};
