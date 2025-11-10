import useImageUpload from '@/hooks/useImageUpload';
import * as E from './EditImage.styles';
import DefaultImage from '@assets/PortfolioCreatePage/ex-representative.png';
import DownloadImage from '@assets/PortfolioCreatePage/icon-download.svg?react';

const EditImage = () => {
  const { selectedImage, handleUpload } = useImageUpload();

  return (
    <E.PublishImage>
      <div>
        <input type="file" id="file" onChange={handleUpload} style={{ display: 'none' }} />
        <img src={selectedImage?.thumbnail || DefaultImage} alt={selectedImage?.file.name || '대표이미지'} />
      </div>

      <label htmlFor="file">
        <E.UploadImage>
          <DownloadImage />
          <p className="b2">대표 이미지 수정</p>
        </E.UploadImage>
      </label>
    </E.PublishImage>
  );
};

export default EditImage;
