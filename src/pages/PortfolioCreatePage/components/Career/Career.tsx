import * as C from './Career.styles';
import * as S from '../Stack/Stack.styles';
import CheckedIcon from '@assets/PortfolioCreatePage/icon-checked.svg?react';
import NotCheckedIcon from '@assets/PortfolioCreatePage/icon-not-checked.svg?react';

interface CareerProps {
  id: number;
  startDate: string;
  endDate: string;
  content: string;
  selected: boolean;
  onToggle: () => void;
}

const Career = ({ id, startDate, endDate, content, selected, onToggle }: CareerProps) => {
  return (
    <C.Career>
      <S.Overlay $selected={selected} />

      <C.TextBox>
        <p className="c1">
          {!endDate && startDate.slice(0, 10)}
          {endDate && (
            <>
              {startDate.slice(0, 10)} - {endDate.slice(0, 10)}
            </>
          )}
        </p>
        <h3 className="b2">{content}</h3>
      </C.TextBox>

      <S.Input type="checkbox" id={`${id}`} checked={selected} onChange={onToggle} />
      <label htmlFor={`${id}`}>{selected ? <CheckedIcon /> : <NotCheckedIcon />}</label>
    </C.Career>
  );
};

export default Career;
