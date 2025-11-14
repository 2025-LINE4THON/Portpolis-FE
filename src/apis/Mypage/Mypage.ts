import type {
  RequestEditUserInfoDTO,
  ResponseUserInfoDTO,
  ResponseLogoutDTO,
  ResponsePortfoliosDTO,
} from '@/types/Mypage/Mypage';
import { axiosInstance } from '../axios';

export const getUserInfo = async (): Promise<ResponseUserInfoDTO> => {
  const { data } = await axiosInstance.get('./api/users/me');
  return data;
};

export const patchUserInfo = async (body: RequestEditUserInfoDTO): Promise<ResponseUserInfoDTO> => {
  const { data } = await axiosInstance.patch('./api/users/me', body);
  return data;
};

export const Logout = async (): Promise<ResponseLogoutDTO> => {
  const { data } = await axiosInstance.post('./api/auth/logout');
  return data;
};

export const getPortfolio = async (): Promise<ResponsePortfoliosDTO> => {
  const { data } = await axiosInstance.get('./api/users/me/portfolios');
  return data;
};
