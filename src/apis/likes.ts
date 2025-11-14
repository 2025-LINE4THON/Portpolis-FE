import { axiosInstance } from './axios';

// 좋아요 추가
export const likePortfolio = async (portfolioId: number) => {
  const response = await axiosInstance.post(`/api/portfolios/${portfolioId}/like`);
  return response.data;
};

// 좋아요 취소
export const unlikePortfolio = async (portfolioId: number) => {
  const response = await axiosInstance.delete(`/api/portfolios/${portfolioId}/unlike`);
  return response.data;
};
