import useGetMeStacks from '@/hooks/queries/PortfolioCreatePage/useGetMeStacks';
import Stack from '../Stack/Stack';
import * as S from './StackList.styles';
import type { StackItem } from '@/context/PortfolioContext';

interface StackListProps {
  selectedStacks: StackItem[];
  toggleStack: (id: number, stack: string, level: number) => void;
}

const StackList = ({ selectedStacks, toggleStack }: StackListProps) => {
  // 내 스택 조회
  const { data: stacksData } = useGetMeStacks();
  // 선택된 스택
  const selected =
    stacksData?.data.filter((stack) => selectedStacks.some((select) => select.stackId === stack.stackId)) || [];

  // 선택 안 된 스택
  const notSelected =
    stacksData?.data.filter((stack) => !selectedStacks.some((select) => select.stackId === stack.stackId)) || [];

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
