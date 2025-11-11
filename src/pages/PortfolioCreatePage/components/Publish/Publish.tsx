import { usePortfolio } from '@/context/PortfolioContext';
import EditHeader from '../EditHeader/EditHeader';
import * as P from './Publish.styles';
import useImageUpload from '@/hooks/useImageUpload';
import CommonPortfolioCard from '@/components/CommonPortfolioCard/CommonPortfolioCard';
import { useState } from 'react';
import CheckedIcon from '@assets/PortfolioCreatePage/icon-checked.svg?react';
import NotCheckedIcon from '@assets/PortfolioCreatePage/icon-not-checked.svg?react';
import PortfolioButton from '../PortfolioButton/PortfolioButton';
import { useNavigate } from 'react-router-dom';

const Publish = () => {
  const { setLevel } = usePortfolio();
  const { selectedImage, handleUpload } = useImageUpload();
  const [title, setTitle] = useState('');
  const [selected, setSelected] = useState<'all' | 'link' | 'secret' | null>(null);
  const navigate = useNavigate();

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
      <P.TitleBox>
        <p>제목</p>
        <input
          placeholder="포트폴리오의 제목을 입력해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </P.TitleBox>

      <P.RangeBox>
        <p className="b1">공개 범위</p>

        <label htmlFor={'all'} onClick={() => setSelected('all')}>
          <P.Item>
            <div>
              {selected === 'all' ? <CheckedIcon /> : <NotCheckedIcon />}
              <P.Input type="checkbox" className="b1" id="all" checked={selected === 'all'} />
              <p className="b1">전체 공개</p>
            </div>

            <p className="b1">누구나 볼 수 있습니다</p>
          </P.Item>
        </label>

        <label htmlFor="link" onClick={() => setSelected('link')}>
          <P.Item>
            <div>
              {selected === 'link' ? <CheckedIcon /> : <NotCheckedIcon />}
              <P.Input type="checkbox" className="b1" id="link" checked={selected === 'link'} />
              <p className="b1">링크 공개</p>
            </div>

            <p className="b1">링크를 가진 사람만 볼 수 있습니다</p>
          </P.Item>
        </label>

        <label htmlFor="secret" onClick={() => setSelected('secret')}>
          <P.Item>
            <div>
              {selected === 'secret' ? <CheckedIcon /> : <NotCheckedIcon />}
              <P.Input type="checkbox" className="b1" id="secret" checked={selected === 'secret'} />
              <p className="b1">비공개</p>
            </div>

            <p className="b1">나만 볼 수 있습니다</p>
          </P.Item>
        </label>
      </P.RangeBox>

      <P.ButtonWrapper>
        <PortfolioButton
          text="발행하기"
          disabled={selected === null || title === ''}
          onClick={() => navigate('/')}
          maxWidth={379}
          fontSize={20}
        />
      </P.ButtonWrapper>
    </P.Publish>
  );
};

export default Publish;
