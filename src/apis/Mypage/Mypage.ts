import type { RequestEditUserInfoDTO, ResponseUserInfoDTO } from '@/types/Mypage/Mypage';
import { axiosInstance } from '../axios';

export const getUserInfo = async (): Promise<ResponseUserInfoDTO> => {
  const { data } = await axiosInstance.get('./api/users/me');
  return data;
};

export const patchUserInfo = async (body: RequestEditUserInfoDTO): Promise<ResponseUserInfoDTO> => {
  const { data } = await axiosInstance.patch('./api/users/me', body);
  return data;
};
