import type { RequestRegisterDTO, ResponseRegisterpDTO } from '@/types/Activity/Activity';
import { axiosInstance } from '../axios';

export const RegisterProject = async (body: RequestRegisterDTO): Promise<ResponseRegisterpDTO> => {
  const { data } = await axiosInstance.post('./api/projects', body);
  return data;
};
