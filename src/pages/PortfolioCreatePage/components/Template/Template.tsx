import { useState, type SetStateAction } from 'react';
import PortfolioButton from '../PortfolioButton/PortfolioButton';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import * as T from './Template.styles';
import type { PortfolioStep } from '../../PortfolioCreatePage';

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
    },
  ];

  const [selected, setSelected] = useState<number | null>(null);

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
            selected={selected === card.id}
            onClick={() => setSelected(card.id)}
          />
        ))}
      </T.CardLayout>

      <T.ButtonWrapper>
        <PortfolioButton
          text="다음 단계로"
          disabled={selected === null}
          onClick={() => setLevel('element')}
          maxWidth={379}
        />
      </T.ButtonWrapper>
    </T.Template>
  );
};

export default Template;
