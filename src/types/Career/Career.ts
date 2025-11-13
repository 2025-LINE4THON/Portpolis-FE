import type { CommonResponse } from '../common';

export type ResponseCareerDTO = CommonResponse<CareerDTO[]>;

export type CareerDTO = {
  careerId: number;
  userId: number;
  content: string;
  startDate: string;
  endDate: string;
};
