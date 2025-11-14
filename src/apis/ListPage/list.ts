import type { ResponseAllPortfolioDto, ResponsePostLike } from '@/types/ListPage/list';
import { axiosInstance } from '../axios';

// 포트폴리오 전체 조회
export const getAllPortfolio = async (): Promise<ResponseAllPortfolioDto> => {
  const { data } = await axiosInstance.get('/api/portfolios/all');

  return data;
};

// 포트폴리오 좋아요
export const postLike = async (id: number): Promise<ResponsePostLike> => {
  const { data } = await axiosInstance.post(`/api/portfolios/${id}/like`);

  return data;
};
