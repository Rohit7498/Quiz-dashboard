import axios from 'axios';

export const CancelToken = axios.CancelToken;

const apiClient = axios.create({
  baseURL         : 'https://api.startladder.co/api/',
});


export default apiClient;