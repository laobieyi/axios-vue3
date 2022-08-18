import { getToken, removeToken, setToken } from '../auth';
import { createMessage } from './message';
import { createResponse } from './response';

export const interceptorsRequest = (instance) => {
  return instance.interceptors.request.use(
    (config) => {
      if (getToken()) {
        let token = getToken();
        config.headers.Authorization = 'Bearer ' + token;
      } else {
        const token = process.env.VUE_APP_TMP_TOKEN;
        config.headers.Authorization = token;
      }
      return config;
    },
    (error) => {
      createMessage(error, 'error');
      return error;
    },
  );
};

export const interceptorsResponse = (instance) => {
  instance.interceptors.response.use(
    (response) => {
      if (200 <= response.data.code && response.data.code <= 304) {
        createMessage(response.data.message);
        return createResponse(response.data);
      } else if (response.data?.access_token) {
        // 登录接口
        let message = '登录成功';
        createMessage(message);
        setToken(response.data?.access_token);
        return createResponse({ message, result: response.data });
      } else {
        // TODO: 错误处理
        if (response.data?.message?.includes('Token')) {
          removeToken();
        }
        createMessage(response.data.message, 'error');
        return createResponse(response.data);
      }
    },
    (error) => {
      createMessage(error, 'error');
      return error;
    },
  );
};
