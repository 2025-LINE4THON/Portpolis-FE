import type { CommonResponse } from '../common';

export type ResponseCareerDTO = CommonResponse<CareerDTO[]>;

export type CareerDTO = {
  careerId: number;
  userId: number;
  content: string;
  startDate: string;
  endDate: string;
};

export type RequestCareerDTO = {
  careers: CareerReqDTO[];
};

export type CareerReqDTO = {
  content: string;
  startDate: string;
  endDate: string | null;
};

export type ResponseLicenseDTO = CommonResponse<LicenseDTO[]>;

export type LicenseDTO = {
  LicenseId: number;
  userId: number;
  name: string;
  gotDate: string;
  endDate: string;
};

export type RequestLicensesDTO = {
  licenses: LicensesReqDTO[];
};

export type LicensesReqDTO = {
  name: string;
  gotDate: string;
  endDate: string | null;
};

export type ResponseStackDTO = CommonResponse<StackDTO[]>;

export type StackDTO = {
  stackId: number;
  userId: number;
  name: string;
  level: string;
};

export type RequestStackDTO = {
  stacks: StackReqDTO[];
};

export type StackReqDTO = {
  name: string;
  level: string;
};

export type ResponseProjectDTO = CommonResponse<ProjectDTO[]>;

export type ProjectDTO = {
  projectId: number;
  userId: number;
  title: string;
  startDate: string;
  endDate: string;
  role: string;
  thumbnail: string;
  projectTags: Tags[];
};

export type Tags = {
  tagId: number;
  content: string;
};
