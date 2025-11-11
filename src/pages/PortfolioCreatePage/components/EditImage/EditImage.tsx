import useImageUpload from '@/hooks/useImageUpload';
import * as E from './EditImage.styles';
import DefaultImage from '@assets/PortfolioCreatePage/ex-representative.png';
import DownloadImage from '@assets/PortfolioCreatePage/icon-download.svg?react';
import EditHeader from '../EditHeader/EditHeader';
import EditButton from '../EditButton/EditButton';
import { useState } from 'react';
import EditModal from '../EditModal/EditModal';

const EditImage = () => {
  const { selectedImage, handleUpload } = useImageUpload();
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <E.PublishImage>
      <EditHeader text="포트폴리오 생성" setShowModal={setShowModal} />
      <EditButton />

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

      {showModal && <EditModal setShowModal={setShowModal} />}
    </E.PublishImage>
  );
};

export default EditImage;
