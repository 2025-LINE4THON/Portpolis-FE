import type {
  RequestCheckIdDTO,
  ResponseCheckIdDTO,
  RequestSignupDTO,
  ResponseSignupDTO,
} from '@/types/OnBoarding/auth';
import { axiosInstance } from '../axios';

export const CheckId = async (body: RequestCheckIdDTO): Promise<ResponseCheckIdDTO> => {
  const { data } = await axiosInstance.post('./api/auth/checkid', body);
  return data;
};

export const Signup = async (body: RequestSignupDTO): Promise<ResponseSignupDTO> => {
  const { data } = await axiosInstance.post('./api/auth/signup', body);
  return data;
};
