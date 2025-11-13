import type { CommonResponse } from '../common';

export type RequestCheckIdDTO = {
  username: string;
};

export type ResponseCheckIdDTO = CommonResponse<{
  success: boolean;
}>;

export type RequestSignupDTO = {
  username: string;
  password: string;
  name: string;
};

export type ResponseSignupDTO = CommonResponse<{
  userId: number;
  username: string;
  name: string;
  email: string;
  phoneNumber: string;
  introduction: string;
  job: string;
}>;
