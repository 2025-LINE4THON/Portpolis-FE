import { usePortfolio } from '@/context/PortfolioContext';
import { useEffect } from 'react';

const useImageUpload = () => {
  const { selectedImage, setSelectedImage } = usePortfolio(); // 커버 이미지

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (selectedImage) {
      URL.revokeObjectURL(selectedImage.thumbnail);
    }

    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);
      setSelectedImage({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.split('/')[0],
      });
    }
  };

  useEffect(() => {
    return () => {
      if (selectedImage) {
        URL.revokeObjectURL(selectedImage.thumbnail);
      }
    };
  }, [selectedImage]);

  return { selectedImage, setSelectedImage, handleUpload };
};

export default useImageUpload;
