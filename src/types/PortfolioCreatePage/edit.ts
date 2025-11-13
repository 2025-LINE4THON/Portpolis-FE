// 포트폴리오 생성 - 소개 문구 수정

import type { CommonResponse } from '../common';

// 포트폴리오 생성 및 수정
export type Skill = {
  id: number;
  rank: number;
};

export type Career = {
  id: number;
  description: string | undefined;
};

export type AboutMe = {
  title: string;
  content: string;
};

export type RequestPortfolios = {
  template: 'STANDARD' | 'IMAGE';
  skills: Skill[];
  careers: Career[];
  projectIds: number[];
  title: string;
  greeting: string;
  introduction: string | undefined;
  aboutMe: AboutMe[];
  thumbnail: string | undefined;
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

// 내 자격증 목록 조회
export type License = {
  licenseId: number;
  userId: number;
  name: string;
  gotDate: Date;
  endDate: Date;
};

export type ResponseGetLicensesDto = CommonResponse<License[]>;
