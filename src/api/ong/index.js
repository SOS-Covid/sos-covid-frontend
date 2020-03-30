import { axiosInstance } from '..';

export const getOngs = () => axiosInstance.get('/organization', {
  params: {
    skip: '0',
    limit: '20',
  },
});
