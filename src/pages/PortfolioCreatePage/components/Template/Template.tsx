import { useEffect, useState, type SetStateAction } from 'react';
import { usePortfolio, type PortfolioStep } from '@/context/PortfolioContext';

import * as T from './Template.styles';
import PortfolioButton from '../PortfolioButton/PortfolioButton';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import Template1 from '@assets/PortfolioCreatePage/template1.png';
import Template2 from '@assets/PortfolioCreatePage/template2.png';
import useGetCheck from '@/hooks/queries/PortfolioCreatePage/useGetCheck';
import Modal from '@/components/Modal/Modal';
import { useNavigate } from 'react-router-dom';

import marketImage from '@assets/marketPlaceBG.svg'

interface TemplateProps {
  setLevel: React.Dispatch<SetStateAction<PortfolioStep>>;
}

const Template = ({ setLevel }: TemplateProps) => {
  const CardData = [
    {
      id: 1,
      title: '스탠다드형',
      content: (
        <>
          깔끔하고 전문적인 레이아웃으로 누구나 쉽게 시작할 수 있습니다.
          <br /> 내 프로젝트에서 느낀 점을 풍부하게 보여줍니다.
        </>
      ),
      url: Template1,
    },
    {
      id: 2,
      title: '비주얼형',
      content: (
        <>
          심플하게, 글은 줄이고
          <br /> 보이고 싶은 사진만 노출합니다.
        </>
      ),
      url: Template2,
    },
    {
      id: 3,
      title: '마켓 플레이스',
      content: <>다양한 템플릿을 마켓 플레이스에서 만나보세요</>,
      url: marketImage,
    },
  ];

  const { selectedTemplate, setSelectedTemplate } = usePortfolio();
  const { data } = useGetCheck();
  const [content, setContent] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [link, setLink] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!data?.data) return;

    const firstFalse = Object.entries(data.data).find(([_, value]) => value === false);

    if (firstFalse) {
      const [key] = firstFalse;

      switch (key) {
        case 'job':
          setContent('내 프로필 정보를 먼저 입력해주세요.');
          setButtonText('프로필 등록하기');
          setLink('/mypage');
          break;
        case 'career':
          setContent('내 커리어 정보를 먼저 완성시켜주세요.');
          setButtonText('커리어 등록하기');
          setLink('/career');
          break;
        case 'stack':
          setContent('기술 스택을 최소 1개 이상 등록해주세요.');
          setButtonText('기술 스택 등록하기');
          setLink('/career');
          break;
        case 'project':
          setContent('프로젝트를 최소 1개 이상 등록해주세요.');
          setButtonText('프로젝트 등록하기');
          setLink('/career');
          break;
      }
    } else {
      setContent('');
    }
  }, [data]);

  return (
    <T.Template>
      <section>
        <h1 className="h3">포트폴리오 템플릿 선택</h1>
        <p className="b1">시작할 템플릿을 선택하거나 기본 템플릿으로 바로 시작하세요.</p>
      </section>

      <T.CardLayout>
        {CardData.map((card) => (
          <PortfolioCard
            key={card.id}
            title={card.title}
            content={card.content}
            selected={selectedTemplate === card.id}
            onClick={() => setSelectedTemplate(card.id)}
            url={card.url}
          />
        ))}
      </T.CardLayout>

      <T.ButtonWrapper>
        <PortfolioButton
          text="다음 단계로"
          disabled={selectedTemplate === null}
          onClick={() => {
            if (selectedTemplate === 3) {
              navigate('/marketplace');
              return;
            } else {
              if (content) {
                setShowModal(true);
              } else {
                setLevel('element');
              }
            }
          }}
          maxWidth={379}
          fontSize={20}
        />
      </T.ButtonWrapper>

      {showModal && (
        <Modal
          content={content}
          buttonText={buttonText}
          onclickBtn={() => navigate(link)}
          setShowModal={setShowModal}
        />
      )}
    </T.Template>
  );
};

export default Template;
