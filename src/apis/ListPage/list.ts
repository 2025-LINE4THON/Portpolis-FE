import type { ResponseAllPortfolioDto } from '@/types/ListPage/list';
import { axiosInstance } from '../axios';

// 포트폴리오 전체 조회
export const getAllPortfolio = async (): Promise<ResponseAllPortfolioDto> => {
  const { data } = await axiosInstance.get('/api/portfolios/all');

  return data;
};
