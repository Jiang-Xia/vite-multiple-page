
import request from '@/api/request';

export const registerUser = async (data: any) => {
  const res = await request({
    url: '/user/register',
    method: 'post',
    data,
  });
  return res.data;
};
