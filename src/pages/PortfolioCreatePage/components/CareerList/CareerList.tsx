import Career from '../Career/Career';
import * as C from './CareerList.styles';
import * as S from '../StackList/StackList.styles';
import type { CareerItem } from '@/context/PortfolioContext';
import useGetMeCareers from '@/hooks/queries/PortfolioCreatePage/useGetMeCareers';

interface CareerListProps {
  selectedCareers: CareerItem[];
  toggleCareer: (id: number, start: string, endDate: string, content: string) => void;
}

const CareerList = ({ selectedCareers, toggleCareer }: CareerListProps) => {
  // 내 경력 조회
  const { data: careersData } = useGetMeCareers();

  // 선택된 커리어
  const selected =
    careersData?.data.filter((career) => selectedCareers.some((selected) => selected.careerId === career.careerId)) ||
    [];

  // 선택 안 된 커리어
  const notSelected =
    careersData?.data.filter((career) => !selectedCareers.some((selected) => selected.careerId === career.careerId)) ||
    [];

  const orderedCareers = [...selected, ...notSelected];

  return (
    <C.CareerList>
      {orderedCareers.map((career, idx) => {
        const isSelected = selectedCareers.some((c) => c.careerId === career.careerId);

        return (
          <C.CareerList key={career.careerId}>
            <Career
              key={career.careerId}
              id={career.careerId}
              startDate={career.startDate}
              endDate={career.endDate ?? ''}
              content={career.content ?? ''}
              selected={isSelected}
              onToggle={() =>
                toggleCareer(career.careerId, career.startDate, career.endDate ?? '', career.content ?? '')
              }
            />

            {idx === selected.length - 1 && selected.length > 0 && notSelected.length > 0 && <S.Divider />}
          </C.CareerList>
        );
      })}
    </C.CareerList>
  );
};

export default CareerList;
