import Axios from 'axios';

export const api = Axios.create({
  baseURL: 'http://10.172.200.93:3000'
});