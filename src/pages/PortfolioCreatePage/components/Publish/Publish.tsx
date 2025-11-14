import { usePortfolio } from '@/context/PortfolioContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalImageUpload from '@/hooks/useLocalImageUpload';
import useGetUsers from '@/hooks/queries/PortfolioCreatePage/useGetUsers';

import type { RequestPortfolios } from '@/types/PortfolioCreatePage/edit';
import usePostPortfolios from '@/hooks/mutations/PortfolioCreatePage/usePostPortfolios';
import { TEMPLATE, VISIBILITY } from '@/constants/key';
import { uploadImage } from '@/apis/upload';

import * as P from './Publish.styles';
import CheckedIcon from '@assets/PortfolioCreatePage/icon-checked.svg?react';
import NotCheckedIcon from '@assets/PortfolioCreatePage/icon-not-checked.svg?react';
import PortfolioButton from '../PortfolioButton/PortfolioButton';
import CommonPortfolioCard from '@/components/CommonPortfolioCard/CommonPortfolioCard';
import EditHeader from '../EditHeader/EditHeader';

const Publish = () => {
  const { setLevel, selectedTemplate, selectedStacks, selectedCareers, selectedProjects, aboutMe } = usePortfolio();
  const { thumbnail, handleUpload } = useLocalImageUpload();
  const [title, setTitle] = useState('');
  const [selected, setSelected] = useState<'all' | 'link' | 'secret' | null>(null);
  const navigate = useNavigate();
  const { data: userData } = useGetUsers();

  const { mutate } = usePostPortfolios();

  const handlePublish = async () => {
    try {
      // 1. 썸네일 이미지가 있으면 먼저 업로드
      let thumbnailUrl: string | undefined;
      if (thumbnail?.file) {
        thumbnailUrl = await uploadImage(thumbnail.file);
      }

      // 2. 포트폴리오 데이터 생성
      const payload: RequestPortfolios = {
        template: selectedTemplate === 1 ? TEMPLATE.STANDARD : TEMPLATE.VISUAL,
        skills: selectedStacks.map((s, idx) => ({ id: s.stackId, rank: idx + 1 })),
        careers: selectedCareers.map((c) => ({ id: c.careerId, description: c.description })),
        projectIds: selectedProjects.map((p) => p.projectId),
        title: title,
        greeting: '',
        introduction: userData?.data.introduction,
        aboutMe: aboutMe,
        thumbnail: thumbnailUrl, // 업로드된 이미지 URL
        isPublic: selected === 'all' ? VISIBILITY.PUBLIC : selected === 'link' ? VISIBILITY.LINK : VISIBILITY.PRIVATE,
      };

      // 3. 포트폴리오 생성
      mutate(payload, {
        onSuccess: (res) => {
          console.log('포트폴리오 생성 성공:', res);
          navigate(`/portfolio/${res.data.portpolioId}`);
        },
        onError: (error) => {
          console.error('포트폴리오 생성 실패:', error);
        },
      });
    } catch (error) {
      console.error('이미지 업로드 실패:', error);
      alert('이미지 업로드에 실패했습니다.');
    }
  };

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
            $width={345}
            $height={228}
            portfolioId={0}
            img={thumbnail?.thumbnail}
            title={title}
            name={userData?.data.username || ''}
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
          onClick={handlePublish}
          maxWidth={379}
          fontSize={20}
        />
      </P.ButtonWrapper>
    </P.Publish>
  );
};

export default Publish;
