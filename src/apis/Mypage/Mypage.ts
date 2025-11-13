import type { ResponseUserInfoDTO } from '@/types/Mypage/Mypage';
import { axiosInstance } from '../axios';

export const getUserInfo = async (): Promise<ResponseUserInfoDTO> => {
  const { data } = await axiosInstance.get('./api/users/me');
  return data;
};
