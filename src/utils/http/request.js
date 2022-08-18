import axios from 'axios';

import { interceptorsRequest, interceptorsResponse } from './interceptors';
import Methods from './methods';

const baseURL = process.env.VUE_APP_API;
const baseConfig = {
  baseURL: baseURL,
  timeout: 12000,
  header: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
};
class Request extends Methods {
  constructor(config, interceptors = {}) {
    super();
    this.instance = axios.create(Object.assign(baseConfig, config));
    this.interceptors = {
      interceptorsRequest: interceptorsRequest,
      interceptorsResponse: interceptorsResponse,
      ...interceptors,
    };
    // 请求拦截器
    this.interceptors.interceptorsRequest(this.instance);

    // 响应拦截器
    this.interceptors.interceptorsResponse(this.instance);
  }
}

export default Request;
