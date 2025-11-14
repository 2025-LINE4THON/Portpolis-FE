import { axiosInstance } from './axios';

// 단일 이미지 업로드
export const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('image', file);

  const { data } = await axiosInstance.post('/api/uploads/image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data.data.url; // 서버에서 반환된 이미지 URL
};

// 여러 이미지 업로드
export const uploadImages = async (files: File[]): Promise<string[]> => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append('images', file);
  });

  const { data } = await axiosInstance.post('/api/uploads/images', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data.data.urls; // 서버에서 반환된 이미지 URL 배열
};
