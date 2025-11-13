import palette from '@/styles/theme';
import * as E from './EditCareerCard.styles';
import { useRef, useState } from 'react';

interface EditCareerCardProps {
  title: string;
  startDate: string;
  endDate: string;
}

const EditCareerCard = ({ title, startDate, endDate }: EditCareerCardProps) => {
  const [input, setInput] = useState('');
  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = () => {
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
          {startDate} - {endDate}
        </E.GrayText>
      </E.TitleWrapper>

      <E.GrayText $color={`${palette.neutral.neutral500}`} $size={16}>
        <E.Textarea
          ref={textRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="경력을 입력해주세요."
          onKeyDown={handleKeyDown}
        />
      </E.GrayText>
    </E.EditCareerCard>
  );
};

export default EditCareerCard;
