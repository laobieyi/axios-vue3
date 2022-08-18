import { interceptorsRequest, interceptorsResponse } from './interceptorsMock';
import Request from './request';
export const request = new Request();
export const mock = new Request(
  {
    baseURL: '/mock',
  },
  {
    interceptorsRequest,
    interceptorsResponse,
  },
);
export default Request;
