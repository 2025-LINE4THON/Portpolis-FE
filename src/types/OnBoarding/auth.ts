import type { CommonResponse } from '../common';

export type RequestCheckIdDTO = {
  username: string;
};

export type ResponseCheckIdDTO = CommonResponse<{
  success: boolean;
}>;
