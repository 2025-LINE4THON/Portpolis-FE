import axios from './axios';

// 좋아요 추가
export const likePortfolio = async (portfolioId: number) => {
  const response = await axios.post(`/portfolios/${portfolioId}/like`);
  return response.data;
};

// 좋아요 취소
export const unlikePortfolio = async (portfolioId: number) => {
  const response = await axios.delete(`/portfolios/${portfolioId}/unlike`);
  return response.data;
};
