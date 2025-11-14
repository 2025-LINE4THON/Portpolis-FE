// 포트폴리오 생성 - 요소 선택

import type {
  ResponseGetCheckDto,
  ResponseGetMeCareersDto,
  ResponseGetMeProjectsDto,
  ResponseGetMeStacksDto,
} from '@/types/PortfolioCreatePage/element';
import { axiosInstance } from '../axios';
import type { ResponseGetLicensesDto } from '@/types/PortfolioCreatePage/edit';

// 내 스택 조회
export const getMeStacks = async (): Promise<ResponseGetMeStacksDto> => {
  const { data } = await axiosInstance.get('/api/users/me/stacks');

  return data;
};

// 내 경력 조회
export const getMeCareers = async (): Promise<ResponseGetMeCareersDto> => {
  const { data } = await axiosInstance.get('/api/users/me/careers');

  return data;
};

// 내 활동 조회
export const getMeProjects = async (): Promise<ResponseGetMeProjectsDto> => {
  const { data } = await axiosInstance.get('api/users/me/projects');

  return data;
};

// 내 자격증 목록 조회
export const getMeLicenses = async (): Promise<ResponseGetLicensesDto> => {
  const { data } = await axiosInstance.get('/api/users/me/licenses');

  return data;
};

// 포트폴리오 필수 요소 확인
export const getCheck = async (): Promise<ResponseGetCheckDto> => {
  const { data } = await axiosInstance.get('/api/portfolios/check');

  return data;
};
