import Career from '../Career/Career';
import * as C from './CareerList.styles';
import * as S from '../StackList/StackList.styles';
import CAREERS from '@data/portfolio/careers.json';

interface CareerListProps {
  selectedCareers: { id: number; date: string; career: string }[];
  toggleCareer: (id: number, date: string, career: string) => void;
}

const CareerList = ({ selectedCareers, toggleCareer }: CareerListProps) => {
  // 선택된 커리어
  const selected = CAREERS.filter((career) => selectedCareers.some((selected) => selected.id === career.id));

  // 선택 안 된 커리어
  const notSelected = CAREERS.filter((career) => !selectedCareers.some((selected) => selected.id === career.id));

  const orderedCareers = [...selected, ...notSelected];

  return (
    <C.CareerList>
      {orderedCareers.map((career, idx) => {
        const isSelected = selectedCareers.some((c) => c.id === career.id);

        return (
          <C.CareerList key={career.id}>
            <Career
              key={career.id}
              id={career.id}
              date={career.date}
              career={career.career}
              selected={isSelected}
              onToggle={() => toggleCareer(career.id, career.date, career.career)}
            />

            {idx === selected.length - 1 && selected.length > 0 && notSelected.length > 0 && <S.Divider />}
          </C.CareerList>
        );
      })}
    </C.CareerList>
  );
};

export default CareerList;
