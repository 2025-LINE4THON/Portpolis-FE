import type { RequestRegisterDTO, ResponseRegisterDTO, ResponseProjectDetailDTO } from '@/types/Activity/Activity';
import { axiosInstance } from '../axios';

export const RegisterProject = async (body: RequestRegisterDTO): Promise<ResponseRegisterDTO> => {
  const { data } = await axiosInstance.post('./api/projects', body);
  return data;
};

export const getActivity = async (projectId: number): Promise<ResponseProjectDetailDTO> => {
  const { data } = await axiosInstance.get(`/api/projects/${projectId}`);
  return data;
};
