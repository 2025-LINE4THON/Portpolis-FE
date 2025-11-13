// 포트폴리오 생성 - 요소 선택

import type { ResponseGetMeStacksDto } from '@/types/PortfolioCreatePage/element';
import { axiosInstance } from '../axios';

// 내 스택 조회
export const getMeStacks = async (): Promise<ResponseGetMeStacksDto> => {
  const { data } = await axiosInstance.get('api/users/me/stacks');

  return data;
};
