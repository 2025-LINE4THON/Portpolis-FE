import type { CommonResponse } from '../common';

export type ResponseUserInfoDTO = CommonResponse<{
  userId: number;
  username: string;
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
  introduction: string | null;
  job: string | null;
}>;

export type RequestEditUserInfoDTO = {
  name: string;
  email: string;
  phoneNumber: string;
  introduction: string;
  job: string;
};

export type ResponseLogoutDTO = CommonResponse<null>;

export type ResponsePortfoliosDTO = CommonResponse<PortfolioDTO[]>;

export type PortfolioDTO = {
  portfolioId: number;
  title: string;
  isPublic: string;
  thumbnail: string | null;
};
