const response = {
  code: 200,
  success: true,
  message: '请求成功',
  result: {},
};
export const createResponse = (config) => {
  return { ...response, ...config };
};
