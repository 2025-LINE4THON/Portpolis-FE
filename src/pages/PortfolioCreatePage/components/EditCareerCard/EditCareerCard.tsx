import palette from '@/styles/theme';
import * as E from './EditCareerCard.styles';
import { useRef, useState } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';

interface EditCareerCardProps {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  editable?: boolean;
}

const EditCareerCard = ({ id, title, startDate, endDate, description, editable }: EditCareerCardProps) => {
  const [input, setInput] = useState(description);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const { setSelectedCareers } = usePortfolio();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setInput(newValue);
    setSelectedCareers((prev) =>
      prev.map((item) => (item.careerId === id ? { ...item, description: newValue } : item)),
    );
  };

  const handleSubmit = () => {
    setSelectedCareers((prev) => prev.map((item) => (item.careerId === id ? { ...item, description: input } : item)));
    textRef.current?.blur(); // 제출 후 커서 없앰
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Shitft + Enter로 줄바꿈
    if (e.key === 'Enter' && e.shiftKey) return;

    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <E.EditCareerCard>
      <E.TitleWrapper>
        <E.Text $color={`${palette.neutral.neutral900}`} className="b1-bold">
          {title}
        </E.Text>

        <E.GrayText $color={`${palette.neutral.neutral300}`} $size={16}>
          {!endDate && startDate.slice(0, 10)}
          {endDate && (
            <>
              {startDate.slice(0, 10)} - {endDate.slice(0, 10)}
            </>
          )}
        </E.GrayText>
      </E.TitleWrapper>

      <E.GrayText $color={`${palette.neutral.neutral500}`} $size={16}>
        <E.Textarea
          ref={textRef}
          value={editable ? undefined : input}
          onChange={handleChange}
          placeholder="경력을 입력해주세요."
          onKeyDown={handleKeyDown}
          readOnly={!editable}
        />
      </E.GrayText>
    </E.EditCareerCard>
  );
};

export default EditCareerCard;
