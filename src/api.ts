import axios from 'axios';

import { config } from './config';

const CONFIG = {
  headers: {
    Authorization: null,
    accept: 'application/json',
    'Accept-Language': 'en',
  },
};

export default class Api {
  static Config = CONFIG;
  // Helpers
  static get = async endpoint => {
    // await Api.checkJWT();
    const url = config.BASE_URL + endpoint;
    return axios.get(url, Api.Config);
  };

  static post = async (endpoint, data) => {
    // await Api.checkJWT();
    const url = config.BASE_URL + endpoint;
    return axios.post(url, data, Api.Config);
  };

  static patch = async (endpoint, data) => {
    // await Api.checkJWT();
    const url = config.BASE_URL + endpoint;
    return axios.patch(url, data, Api.Config);
  };

  // Here goes other API calls
}
