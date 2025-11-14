import type {
  ResponseCareerDTO,
  ResponseLicenseDTO,
  ResponseStackDTO,
  ResponseProjectDTO,
  RequestLicensesDTO,
  RequestCareerDTO,
  RequestStackDTO,
} from '@/types/Career/Career';
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

export const getProject = async (): Promise<ResponseProjectDTO> => {
  const { data } = await axiosInstance.get('./api/projects');
  return data;
};

export const uploadLicense = async (body: RequestLicensesDTO): Promise<ResponseLicenseDTO> => {
  const { data } = await axiosInstance.post('./api/licenses', body);
  return data;
};

export const uploadCareer = async (body: RequestCareerDTO): Promise<ResponseCareerDTO> => {
  const { data } = await axiosInstance.post('./api/careers', body);
  return data;
};

export const uploadStack = async (body: RequestStackDTO): Promise<ResponseStackDTO> => {
  const { data } = await axiosInstance.post('./api/stacks', body);
  return data;
};
