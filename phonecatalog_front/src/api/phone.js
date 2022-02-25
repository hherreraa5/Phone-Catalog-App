import URL from './routes';
import axios from 'axios';

export const getPhone = async (token) =>  {
  return await axios.get(
    `${URL}/phone/`,
    {
      headers: {
        //Authorization: `Token ${token}`,
      },
    }
  ).then((response) => response.data)
  .catch((error) => error);
}