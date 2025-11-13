import palette from '@/styles/theme';
import * as E from './EditProjectStandardCard.styles';

interface EditProjectStandardCardProps {
  img: string;
  startDate: string;
  endDate: string;
  title: string;
  role: string;
}

const EditProjectStandardCard = ({ img, startDate, endDate, title, role }: EditProjectStandardCardProps) => {
  return (
    <E.EditProjectStandardCard>
      <E.ImageWrapper>
        <img src={img} alt={`${title}의 이미지`} />
      </E.ImageWrapper>

      <E.TextWrapper>
        <div>
          <E.Text $color={`${palette.neutral.neutral200}`} $size={12}>
            {startDate} - {endDate}
          </E.Text>

          <E.Text $color={`${palette.neutral.neutral800}`} $size={14}>
            {title}
          </E.Text>
        </div>

        <E.Text $color={`${palette.primary.primaryMain}`} $size={12} $weight={700}>
          {role}
        </E.Text>
      </E.TextWrapper>
    </E.EditProjectStandardCard>
  );
};

export default EditProjectStandardCard;
