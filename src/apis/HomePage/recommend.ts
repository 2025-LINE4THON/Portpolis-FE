import type { ResponseGetRecommendDto } from '@/types/HomePage/recommend';
import { axiosInstance } from '../axios';
import type { order, ResponseGetSearchDto } from '@/types/ListPage/list';

// 포트폴리오 추천
export const getRecommend = async (): Promise<ResponseGetRecommendDto> => {
  const { data } = await axiosInstance.get('/api/portfolios/recommend');

  return data;
};

// 포트폴리오 검색
export const getSearched = async (body: order): Promise<ResponseGetSearchDto> => {
  const { data } = await axiosInstance.get('/api/portfolios/search', {
    params: body,
  });

  return data;
};
