// 使用 Mock

import Mock from 'mockjs';

import { createResponse } from '../utils/http/response';
import { result } from './mock';

Mock.mock('/mock/list', createResponse({ result }));
Mock.mock('/mock/lists', createResponse({ result }));
