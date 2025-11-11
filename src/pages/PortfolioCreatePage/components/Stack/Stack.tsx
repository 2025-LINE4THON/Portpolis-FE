import * as S from './Stack.styles';
import CheckedIcon from '@assets/PortfolioCreatePage/icon-checked.svg?react';
import NotCheckedIcon from '@assets/PortfolioCreatePage/icon-not-checked.svg?react';

interface StackProps {
  stack: string;
  level: number;
  selected: boolean;
  onToggle: () => void;
}

const Stack = ({ stack, level, selected, onToggle }: StackProps) => {
  return (
    <S.Stack>
      <S.Overlay $selected={selected} />

      <S.Box>
        <S.StackChip>{stack}</S.StackChip>

        <S.LevelWrapper>
          {new Array(5).fill(0).map((_, idx) => (
            <S.Circle key={idx} $fill={idx < level}></S.Circle>
          ))}
        </S.LevelWrapper>
      </S.Box>

      <S.Input type="checkbox" id={`${stack}-${level}`} checked={selected} onChange={onToggle} />
      <label htmlFor={`${stack}-${level}`}>{selected ? <CheckedIcon /> : <NotCheckedIcon />}</label>
    </S.Stack>
  );
};

export default Stack;
