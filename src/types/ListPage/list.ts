import type { CommonResponse } from '../common';
import type { RecommendPortfolio } from '../HomePage/recommend';

// 포트폴리오 둘러보기
export type Portpolio = {
  id: number;
  title: string;
  writer: string;
  createdAt: string;
  views: number;
};

export type ResponseAllPortfolioDto = CommonResponse<Portpolio[]>;

// 포트폴리오 검색
export type order = {
  keyword?: string;
  sort?: 'likes' | 'views' | 'recent';
  template?: 'STANDARD' | 'VISUAL';
  isPublic?: 'PUBLIC' | 'PRIVATE' | 'LINK';
};

export type ResponseGetSearchDto = CommonResponse<RecommendPortfolio[]>;

// 포트폴리오 좋아요
export type ResponsePostLike = CommonResponse<null>;
