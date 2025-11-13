import { usePortfolio } from '@/context/PortfolioContext';
import { useEffect } from 'react';

const useLocalImageUpload = () => {
  const { thumbnail, setThumbnail } = usePortfolio();

  useEffect(() => {
    return () => {
      if (thumbnail) {
        URL.revokeObjectURL(thumbnail.thumbnail);
      }
    };
  }, [thumbnail]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);
      setThumbnail({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.split('/')[0],
      });
    }
  };

  return { thumbnail, setThumbnail, handleUpload };
};

export default useLocalImageUpload;
