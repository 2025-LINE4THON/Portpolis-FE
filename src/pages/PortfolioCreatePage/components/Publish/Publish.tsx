import { usePortfolio } from '@/context/PortfolioContext';
import EditHeader from '../EditHeader/EditHeader';
import * as P from './Publish.styles';
import useImageUpload from '@/hooks/useImageUpload';
import CommonPortfolioCard from '@/components/CommonPortfolioCard/CommonPortfolioCard';

const Publish = () => {
  const { setLevel } = usePortfolio();
  const { selectedImage, handleUpload } = useImageUpload();

  return (
    <P.Publish>
      <EditHeader
        text="포트폴리오 발행 설정"
        subText="공개 전 기본 정보를 확인하고 발행 설정을 완료하세요."
        onClick={() => setLevel('edit')}
      />

      <P.FlexBox>
        <P.Upload>
          <label htmlFor="file">
            <P.DownloadIcon />
            <p className="b2">이미지를 업로드하세요 (권장: 1200×630px)</p>
            <input type="file" id="file" onChange={handleUpload} style={{ display: 'none' }} />
            <div className="b2">이미지 변경</div>
          </label>
        </P.Upload>

        <P.Thumbnail>
          <p className="b1">썸네일 미리보기</p>
          <CommonPortfolioCard
            img={selectedImage?.thumbnail}
            title="감각적인 브랜드를 만드는 나만의 포트폴리오"
            name="홍길동"
          />
        </P.Thumbnail>
      </P.FlexBox>
    </P.Publish>
  );
};

export default Publish;
