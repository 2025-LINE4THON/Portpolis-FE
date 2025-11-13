// 포트폴리오 생성 - 소개 문구 수정
import type { CommonResponse } from '../common';
import { TEMPLATE, VISIBILITY } from '@/constants/key';

// 포트폴리오 생성 및 수정
export type Skill = {
  id: number;
  rank: number;
};

export type Career = {
  careerId: number;
  content?: string;
  startDate?: string;
  endDate?: string;
  description: string | undefined;
};

export type AboutMe = {
  title: string;
  content: string;
};

export type RequestPortfolios = {
  template: (typeof TEMPLATE)[keyof typeof TEMPLATE];
  skills: Skill[];
  careers: { id: number; description?: string }[];
  projectIds: number[];
  title: string;
  greeting: string;
  introduction: string | undefined;
  aboutMe: AboutMe[];
  thumbnail: string | undefined;
  isPublic: (typeof VISIBILITY)[keyof typeof VISIBILITY];
};

export type ResponsePortfolios = CommonResponse<{
  portpolioId: number;
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

// 내 자격증 목록 조회
export type License = {
  licenseId: number;
  userId: number;
  name: string;
  gotDate: Date;
  endDate: Date;
};

export type ResponseGetLicensesDto = CommonResponse<License[]>;

// 포트폴리오 상세 조회
export type Stack = {
  stackId: number;
  name: string;
  level: string;
  rank: number;
};

export type Project = {
  projectId: number;
  title: string;
  thumbnail: string | null;
  role: string;
  startDate: string;
  endDate: string;
};

export type Portfolio = {
  portfolioId: number;
  userId: number;
  title: string;
  thumbnail: string | null;
  coverImage: string | null;
  template: (typeof TEMPLATE)[keyof typeof TEMPLATE];
  views: number;
  isPublic: string;
  aboutMe: AboutMe[];
  createdAt: string;
  updatedAt: string;
  stacks: Stack[];
  careers: Career[];
  projects: Project[];
  introduction: string;
  visibility: (typeof VISIBILITY)[keyof typeof VISIBILITY];
  userName: string;
  job: string;
};

export type ResponseGetPortfolio = CommonResponse<Portfolio>;
