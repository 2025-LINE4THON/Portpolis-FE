import type { ResponseCareerDTO, ResponseLicenseDTO, ResponseStackDTO } from '@/types/Career/Career';
import { axiosInstance } from '../axios';

export const getCareer = async (): Promise<ResponseCareerDTO> => {
  const { data } = await axiosInstance.get('./api/careers');
  return data;
};

export const getLicense = async (): Promise<ResponseLicenseDTO> => {
  const { data } = await axiosInstance.get('./api/licenses');
  return data;
};

export const getStack = async (): Promise<ResponseStackDTO> => {
  const { data } = await axiosInstance.get('./api/stacks');
  return data;
};
