import type { CommonResponse } from '../common';

export type ResponseCareerDTO = CommonResponse<CareerDTO[]>;

export type CareerDTO = {
  careerId: number;
  userId: number;
  content: string;
  startDate: string;
  endDate: string;
};

export type ResponseLicenseDTO = CommonResponse<LicenseDTO[]>;

export type LicenseDTO = {
  LicenseId: number;
  userId: number;
  name: string;
  gotDate: string;
  endDate: string;
};
