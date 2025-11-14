// 포트폴리오 생성 - 요소 선택
import type { CommonResponse } from '../common';

// 내 스택 조회
export type Stack = {
  stackId: number;
  name: string;
  level: number;
};

export type ResponseGetMeStacksDto = CommonResponse<Stack[]>;

// 내 경력 조회
export type Career = {
  careerId: number;
  content: string;
  startDate: string;
  endDate: string | null;
};

export type ResponseGetMeCareersDto = CommonResponse<Career[]>;

// 내 활동 조회
export type Project = {
  projectId: number;
  title: string;
  startDate: string;
  endDate: string | null;
  role?: string;
  thumbnail: string;
  tags: string[];
  stacks?: { stackId: number; stackName: string }[];
  contents: { title: string; content: string }[];
  images: string[];
  links: { name: string; url: string }[];
};

export type ResponseGetMeProjectsDto = CommonResponse<Project[]>;

// 포트폴리오 필수 요소 확인
export type ResponseGetCheckDto = CommonResponse<{
  career: boolean;
  stack: boolean;
  project: boolean;
  job: boolean;
}>;
