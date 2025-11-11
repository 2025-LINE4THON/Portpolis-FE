import * as C from '../Career/Career.styles';
import * as S from '../Stack/Stack.styles';
import CheckedIcon from '@assets/PortfolioCreatePage/icon-checked.svg?react';
import NotCheckedIcon from '@assets/PortfolioCreatePage/icon-not-checked.svg?react';

interface ProjectProps {
  id: number;
  date: string;
  project: string;
  selected: boolean;
  onToggle: () => void;
}

const Project = ({ id, date, project, selected, onToggle }: ProjectProps) => {
  return (
    <C.Career>
      <S.Overlay $selected={selected} />

      <C.TextBox>
        <p className="c1">{date}</p>
        <h3 className="b2">{project}</h3>
      </C.TextBox>

      <S.Input type="checkbox" id={`${id}-${project}`} checked={selected} onChange={onToggle} />
      <label htmlFor={`${id}-${project}`}>{selected ? <CheckedIcon /> : <NotCheckedIcon />}</label>
    </C.Career>
  );
};

export default Project;
