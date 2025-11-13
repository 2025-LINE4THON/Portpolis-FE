import { type SetStateAction } from 'react';
import { usePortfolio, type PortfolioStep } from '@/context/PortfolioContext';

import * as E from './Element.styles';
import StackList from '../StackList/StackList';
import ElementCard from '../ElementCard/ElementCard';
import CareerList from '../CareerList/CareerList';
import ProjectList from '../ProjectList/ProjectList';
import PortfolioButton from '../PortfolioButton/PortfolioButton';
import ArrowIcon from '@assets/PortfolioCreatePage/icon-arrow-right.svg?react';
import ElementBox from '../ElementBox/ElementBox';

interface ElementProps {
  setLevel: React.Dispatch<SetStateAction<PortfolioStep>>;
}

const Element = ({ setLevel }: ElementProps) => {
  const { selectedStacks, selectedCareers, selectedProjects, toggleStack, toggleCareer, toggleProject } =
    usePortfolio();

  return (
    <E.Element>
      <E.Section>
        <div>
          <h1 className="h3">포트폴리오 구성 요소 선택</h1>
          <p className="b1">포트폴리오에 표시될 활동과 내 기술 스택을 선택해주세요.</p>
        </div>

        <PortfolioButton
          text={
            <E.Button>
              <div>포트폴리오 생성</div>
              <ArrowIcon />
            </E.Button>
          }
          onClick={() => setLevel('edit')}
          maxWidth={214}
          fontSize={14}
          disabled={selectedProjects.length === 0}
        />
      </E.Section>

      <E.ElementList>
        <E.DividerPrimaryIcon />
        <ElementBox
          number={1}
          title="내 기술 스택"
          subTitle="최대 4개까지 자유롭게 선택해주세요."
          ElementCard={
            <ElementCard
              content={
                <StackList
                  selectedStacks={selectedStacks}
                  toggleStack={(stackId, name, level) => toggleStack({ stackId, name, level })}
                />
              }
            />
          }
        />

        <ElementBox
          number={2}
          title="내 경력"
          subTitle="자유롭게 선택해주세요."
          ElementCard={
            <ElementCard
              content={
                <CareerList
                  selectedCareers={selectedCareers}
                  toggleCareer={(id, date, career) => toggleCareer({ id, date, career })}
                />
              }
            />
          }
        />

        <ElementBox
          number={3}
          title={
            <p>
              내 프로젝트<span>*</span>
            </p>
          }
          subTitle="최대 6개까지 자유롭게 선택해주세요."
          ElementCard={
            <ElementCard
              content={
                <ProjectList
                  selectedProjects={selectedProjects}
                  toggleProject={(id, date, project) => toggleProject({ id, date, project })}
                />
              }
            />
          }
        />
      </E.ElementList>
    </E.Element>
  );
};

export default Element;
