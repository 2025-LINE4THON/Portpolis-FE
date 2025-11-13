import type { RequestPortfolios, ResponsePortfolios } from '@/types/PortfolioCreatePage/edit';
import { axiosInstance } from '../axios';

// 포트폴리오 생성
export const postPortfolios = async (body: RequestPortfolios): Promise<ResponsePortfolios> => {
  const { data } = await axiosInstance.post('/api/portfolios', body);

  return data;
};

// 포트폴리오 수정
export const patchPortfolios = async (body: RequestPortfolios, portfolioId: number): Promise<ResponsePortfolios> => {
  const { data } = await axiosInstance.patch(`/api/portfolios/${portfolioId}`, body);

  return data;
};
