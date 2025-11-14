import type { ResponseGetRecommendDto } from '@/types/HomePage/recommend';
import { axiosInstance } from '../axios';

// 포트폴리오 추천
export const getRecommend = async (): Promise<ResponseGetRecommendDto> => {
  const { data } = await axiosInstance.get('/api/portfolios/recommend');

  return data;
};
