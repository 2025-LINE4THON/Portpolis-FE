import Stack from '../Stack/Stack';
import * as S from './StackList.styles';
import STACKS from '@data/portfolio/stacks.json';

interface StackListProps {
  selectedStacks: { id: number; stack: string; level: number }[];
  toggleStack: (id: number, stack: string, level: number) => void;
}

const StackList = ({ selectedStacks, toggleStack }: StackListProps) => {
  // 선택된 스택
  const selected = STACKS.filter((stack) => selectedStacks.some((select) => select.id === stack.id));

  // 선택 안 된 스택
  const notSelected = STACKS.filter((stack) => !selectedStacks.some((select) => select.id === stack.id));

  const orderedStacks = [...selected, ...notSelected];

  return (
    <S.StackList>
      {orderedStacks.map((stack, idx) => {
        const isSelected = selectedStacks.some((s) => s.id === stack.id);

        return (
          <div key={stack.id}>
            <Stack
              key={stack.id}
              stack={stack.stack}
              level={stack.level}
              selected={isSelected}
              onToggle={() => toggleStack(stack.id, stack.stack, stack.level)}
            />

            {idx === selected.length - 1 && selected.length > 0 && notSelected.length > 0 && <S.Divider />}
          </div>
        );
      })}
    </S.StackList>
  );
};

export default StackList;
