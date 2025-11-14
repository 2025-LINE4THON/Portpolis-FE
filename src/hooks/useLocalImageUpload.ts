import { usePortfolio } from '@/context/PortfolioContext';
import { useEffect } from 'react';

const useLocalImageUpload = () => {
  const { thumbnail, setThumbnail } = usePortfolio();

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (thumbnail) {
      URL.revokeObjectURL(thumbnail.thumbnail);
    }

    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);
      setThumbnail({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.split('/')[0],
      });
    }
  };

  useEffect(() => {
    return () => {
      if (thumbnail) {
        URL.revokeObjectURL(thumbnail.thumbnail);
      }
    };
  }, [thumbnail]);

  return { thumbnail, setThumbnail, handleUpload };
};

export default useLocalImageUpload;
