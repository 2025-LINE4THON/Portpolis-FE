import { useState, type SetStateAction } from 'react';
import * as E from './Element.styles';
import type { PortfolioStep } from '../../PortfolioCreatePage';
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
  const [selectedStacks, setSelectedStacks] = useState<{ id: number; stack: string; level: number }[]>([]); // 내 기술 스택
  const [selectedCareers, setSelectedCareers] = useState<{ id: number; date: string; career: string }[]>([]); // 내 경력
  const [selectedProjects, setSelectedProjects] = useState<{ id: number; date: string; project: string }[]>([]); // 내 프로젝트

  // 내 기술 스택 선택
  const toggleStack = (stackId: number, stack: string, level: number) => {
    setSelectedStacks((prev) => {
      const exists = prev.find((s) => s.id === stackId);

      if (exists) {
        return prev.filter((s) => s.id !== stackId);
      }

      if (prev.length >= 4) return prev;

      return [...prev, { id: stackId, stack, level }];
    });
  };

  // 내 경력 선택
  const toggleCareer = (careerId: number, date: string, career: string) => {
    setSelectedCareers((prev) => {
      const exists = prev.find((c) => c.id === careerId);

      if (exists) {
        return prev.filter((c) => c.id !== careerId);
      }

      return [...prev, { id: careerId, date, career }];
    });
  };

  // 내 프로젝트 선택
  const toggleProject = (projectId: number, date: string, project: string) => {
    setSelectedProjects((prev) => {
      const exists = prev.find((p) => p.id === projectId);

      if (exists) {
        return prev.filter((p) => p.id !== projectId);
      }

      if (prev.length >= 6) return prev;

      return [...prev, { id: projectId, date, project }];
    });
  };

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
          onClick={() => setLevel('publish')}
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
                  toggleStack={(id, stack, level) => toggleStack(id, stack, level)}
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
                  toggleCareer={(id, date, career) => toggleCareer(id, date, career)}
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
                  toggleProject={(id, date, project) => toggleProject(id, date, project)}
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
