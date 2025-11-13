import type { RequestCheckIdDTO, ResponseCheckIdDTO } from '@/types/OnBoarding/auth';
import { axiosInstance } from '../axios';

export const CheckId = async (body: RequestCheckIdDTO): Promise<ResponseCheckIdDTO> => {
  const { data } = await axiosInstance.post('./api/auth/checkid', body);
  return data;
};
