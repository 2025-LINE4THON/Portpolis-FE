import type { CommonResponse } from '../common';

export type ResponseUserInfoDTO = CommonResponse<{
  userId: number;
  username: string;
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
  introduction: string | null;
  job: string | null;
}>;
