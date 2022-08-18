import { ElMessage } from 'element-plus';

export const createMessage = (message = '成功', type = 'success') => {
  return ElMessage({
    message,
    type,
    grouping: true,
  });
};
