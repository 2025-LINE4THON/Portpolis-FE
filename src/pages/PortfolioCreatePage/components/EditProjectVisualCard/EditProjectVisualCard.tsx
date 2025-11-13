import * as E from './EditProjectVisualCard.styles';
import GithubIcon from '@assets/PortfolioCreatePage/icon-github.svg?react';

interface EditProjectVisualCardProps {
  idx: number;
  img: string;
  startDate: string;
  endDate: string;
  title: string;
  stack: string[];
}

const EditProjectVisualCard = ({ idx, img, startDate, endDate, title, stack }: EditProjectVisualCardProps) => {
  return (
    <E.EditProjectVisualCard $isImgLeft={idx % 2 === 0}>
      <E.ImgWrapper $isImgLeft={idx % 2 === 0}>
        <img src={img} alt={`${title}이미지`} />
        <img src={img} alt={`${title}이미지`} />
      </E.ImgWrapper>

      <E.InfoWrapper $isImgLeft={idx % 2 === 0}>
        <E.ProjectName>Main Project</E.ProjectName>

        <E.Link>
          <GithubIcon />
          <E.Date>
            {startDate}-{endDate}
          </E.Date>
        </E.Link>

        <E.ContentBox>
          <E.ChipWrapper>
            {stack.map((s, idx) => (
              <E.Chip className="b1" key={idx}>
                {s}
              </E.Chip>
            ))}
          </E.ChipWrapper>
          {title}
        </E.ContentBox>
      </E.InfoWrapper>
    </E.EditProjectVisualCard>
  );
};

export default EditProjectVisualCard;
