// 포트폴리오 생성 - 요소 선택

import type { ResponseGetMeCareersDto, ResponseGetMeStacksDto } from '@/types/PortfolioCreatePage/element';
import { axiosInstance } from '../axios';

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
export const getMeProjects = async () => {
  const { data } = await axiosInstance.get('api/users/me/projects');

  return data;
};
