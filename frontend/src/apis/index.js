import axios from 'axios';

const MOCK_API = import.meta.env.VITE_MOCK_API;

export const fetchJokes = async () => {
  const result = await axios.get(`${MOCK_API}/jokes`);
  return result.data.filter((joke) => {
    return !document.cookie.includes(`${joke.id}=voted`);
  });
};

export const updateJoke = async (data) => {
  const result = await axios.put(`${MOCK_API}/jokes/${data.id}`, data);
  return result.data;
};
