import type { CommonResponse } from '../common';

// 포트폴리오 둘러보기
export type Portpolio = {
  id: number;
  title: string;
  writer: string;
  createdAt: string;
  views: number;
};

export type ResponseAllPortfolioDto = CommonResponse<Portpolio[]>;
