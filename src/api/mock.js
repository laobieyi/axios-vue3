import { mock,request } from '../utils/http';

export const mockList = (params) => {
  return mock.get('/list');
};
export const mockLists = (params) => {
  return request.get('/lists');
};
