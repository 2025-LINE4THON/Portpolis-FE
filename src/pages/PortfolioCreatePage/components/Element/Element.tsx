import { useState, type SetStateAction } from 'react';
import * as E from './Element.styles';
import type { PortfolioStep } from '../../PortfolioCreatePage';
import StackList from '../StackList/StackList';
import ElementCard from '../ElementCard/ElementCard';
import CareerList from '../CareerList/CareerList';

interface ElementProps {
  setLevel: React.Dispatch<SetStateAction<PortfolioStep>>;
}

const Element = ({ setLevel }: ElementProps) => {
  console.log(setLevel);

  const [selectedStacks, setSelectedStacks] = useState<{ id: number; stack: string; level: number }[]>([]); // 내 기술 스택
  const [selectedCareers, setSelectedCareers] = useState<{ id: number; date: string; career: string }[]>([]); // 내 경력

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

  return (
    <E.Element>
      <section>
        <h1 className="h3">포트폴리오 구성 요소 선택</h1>
        <p className="b1">포트폴리오에 표시될 활동과 내 기술 스택을 선택해주세요.</p>
      </section>

      <ElementCard
        content={
          <StackList
            selectedStacks={selectedStacks}
            toggleStack={(id, stack, level) => toggleStack(id, stack, level)}
          />
        }
      />

      <ElementCard
        content={
          <CareerList
            selectedCareers={selectedCareers}
            toggleCareer={(id, date, career) => toggleCareer(id, date, career)}
          />
        }
      />
    </E.Element>
  );
};

export default Element;
