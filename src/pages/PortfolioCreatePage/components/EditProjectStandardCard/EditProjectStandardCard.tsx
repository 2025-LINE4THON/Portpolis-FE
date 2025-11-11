import palette from '@/styles/theme';
import * as E from './EditProjectStandardCard.styles';

interface EditProjectStandardCardProps {
  img: string;
  date: string;
  title: string;
  role: string;
}

const EditProjectStandardCard = ({ img, date, title, role }: EditProjectStandardCardProps) => {
  return (
    <E.EditProjectStandardCard>
      <E.ImageWrapper>
        <img src={img} alt={`${title}의 이미지`} />
      </E.ImageWrapper>

      <E.TextWrapper>
        <div>
          <E.Text $color={`${palette.neutral.neutral200}`} $size={12}>
            {date}
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
