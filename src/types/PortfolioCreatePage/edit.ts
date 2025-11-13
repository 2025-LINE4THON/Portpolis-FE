// 포트폴리오 생성 - 소개 문구 수정

import type { CommonResponse } from '../common';

// 포트폴리오 생성 및 수정
export type Skill = {
  id: number;
  rank: number;
};

export type Career = {
  id: number;
  description: string;
};

export type AboutMe = {
  title: string;
  content: string;
};

export type RequestPortfolios = {
  portpolioTemplate: 'STANDARD' | 'IMAGE';
  skills: Skill[];
  careers: Career[];
  projectIds: number[];
  title: string;
  greeting: string;
  Introduction: string;
  aboutMe: AboutMe[];
  thumbnail: string;
  isPublic: 'PUBLIC' | 'PRIVATE' | 'LINK';
};

export type ResponsePortfolios = CommonResponse<{
  portfolioId: number;
}>;

// 내 정보 조회
export type ResponseGetUsersDto = CommonResponse<{
  userId: number;
  username: string;
  name: string;
  email: string;
  phoneNumber: number;
  introduction: string;
  job: string;
}>;
