import type {
  RequestEditUserInfoDTO,
  ResponseUserInfoDTO,
  ResponseLogoutDTO,
  ResponsePortfoliosDTO,
  RequestLinkDTO,
  LinkDTO,
  ResponseLinkDTO,
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

export const uploadLink = async (body: RequestLinkDTO): Promise<LinkDTO> => {
  const { data } = await axiosInstance.post('./api/users/me/links', body);
  return data;
};

export const getLink = async (): Promise<ResponseLinkDTO> => {
  const { data } = await axiosInstance.get('./api/users/me/links');
  return data;
};
