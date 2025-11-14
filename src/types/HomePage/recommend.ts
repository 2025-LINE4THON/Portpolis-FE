import type { TEMPLATE, VISIBILITY } from '@/constants/key';
import type { CommonResponse } from '../common';

// 포트폴리오 추천
export type RecommendPortfolio = {
  portfolioId: number;
  userId: number;
  title: string;
  thumbnail: string | null;
  coverImage: string | null;
  template: (typeof TEMPLATE)[keyof typeof TEMPLATE];
  views: number;
  isPublic: (typeof VISIBILITY)[keyof typeof VISIBILITY];
  greeting: string;
  introduction: string | null;
  aboutMe: { title: string; content: string }[];
  createdAt: string;
  updatedAt: string;
  likesCount: number;
  userName: string | null;
};

export type ResponseGetRecommendDto = CommonResponse<RecommendPortfolio[]>;
