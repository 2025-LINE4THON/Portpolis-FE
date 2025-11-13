import type { ResponseCareerDTO } from '@/types/Career/Career';
import { axiosInstance } from '../axios';

export const getCareer = async (): Promise<ResponseCareerDTO> => {
  const { data } = await axiosInstance.get('./api/careers');
  return data;
};
