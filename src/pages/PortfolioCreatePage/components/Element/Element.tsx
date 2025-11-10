import { useState, type SetStateAction } from 'react';
import * as E from './Element.styles';
import type { PortfolioStep } from '../../PortfolioCreatePage';
import StackList from '../StackList/StackList';
import ElementCard from '../ElementCard/ElementCard';

interface ElementProps {
  setLevel: React.Dispatch<SetStateAction<PortfolioStep>>;
}

const Element = ({ setLevel }: ElementProps) => {
  console.log(setLevel);

  const [selectedStacks, setSelectedStacks] = useState<{ id: number; stack: string; level: number }[]>([]);

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
    </E.Element>
  );
};

export default Element;
