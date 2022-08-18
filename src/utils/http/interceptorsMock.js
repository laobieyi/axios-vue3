import { createMessage } from './message';
import { createResponse } from './response';
export const interceptorsRequest = (instance) => {
  return instance.interceptors.request.use(
    (config) => {
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
      createMessage();
      return createResponse(response.data);
    },
    (error) => {
      createMessage(error, 'error');
      return error;
    },
  );
};
