import * as C from './Career.styles';
import * as S from '../Stack/Stack.styles';
import CheckedIcon from '@assets/PortfolioCreatePage/icon-checked.svg?react';
import NotCheckedIcon from '@assets/PortfolioCreatePage/icon-not-checked.svg?react';

interface CareerProps {
  id: number;
  date: string;
  career: string;
  selected: boolean;
  onToggle: () => void;
}

const Career = ({ id, date, career, selected, onToggle }: CareerProps) => {
  return (
    <C.Career>
      <S.Overlay $selected={selected} />

      <C.TextBox>
        <p className="c1">{date}</p>
        <h3 className="b2">{career}</h3>
      </C.TextBox>

      <S.Input type="checkbox" id={`${id}`} checked={selected} onChange={onToggle} />
      <label htmlFor={`${id}`}>{selected ? <CheckedIcon /> : <NotCheckedIcon />}</label>
    </C.Career>
  );
};

export default Career;
