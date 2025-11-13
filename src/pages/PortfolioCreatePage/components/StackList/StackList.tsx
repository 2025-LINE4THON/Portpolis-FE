import Stack from '../Stack/Stack';
import * as S from './StackList.styles';
import STACKS from '@data/portfolio/stacks.json';
import type { StackItem } from '@/context/PortfolioContext';

interface StackListProps {
  selectedStacks: StackItem[];
  toggleStack: (id: number, stack: string, level: number) => void;
}

const StackList = ({ selectedStacks, toggleStack }: StackListProps) => {
  // 선택된 스택
  const selected = STACKS.filter((stack) => selectedStacks.some((select) => select.stackId === stack.stackId));

  // 선택 안 된 스택
  const notSelected = STACKS.filter((stack) => !selectedStacks.some((select) => select.stackId === stack.stackId));

  const orderedStacks = [...selected, ...notSelected];

  return (
    <S.StackList>
      {orderedStacks.map((stack, idx) => {
        const isSelected = selectedStacks.some((s) => s.stackId === stack.stackId);

        return (
          <div key={stack.stackId}>
            <Stack
              key={stack.stackId}
              stack={stack.name}
              level={stack.level}
              selected={isSelected}
              onToggle={() => toggleStack(stack.stackId, stack.name, stack.level)}
            />
            {idx === selected.length - 1 && selected.length > 0 && notSelected.length > 0 && <S.Divider />}
          </div>
        );
      })}
    </S.StackList>
  );
};

export default StackList;
