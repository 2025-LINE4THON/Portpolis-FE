import * as E from './EditProjectVisualCard.styles';
import GithubIcon from '@assets/PortfolioCreatePage/icon-github.svg?react';
import ExThumbnail1 from '@assets/PortfolioCreatePage/ex-thumbnail-hor.jpeg';
import ExThumbnail2 from '@assets/PortfolioCreatePage/ex-thumbnail-hor2.jpeg';
import ExThumbnail3 from '@assets/PortfolioCreatePage/ex-thumbnail-ver.jpeg';
import ExThumbnail4 from '@assets/PortfolioCreatePage/ex-thumbnail-ver2.jpeg';
import ExThumbnail5 from '@assets/PortfolioCreatePage/ex-thumbnail-hor3.jpeg';
import ExThumbnail6 from '@assets/PortfolioCreatePage/ex-thumbnail-hor4.jpeg';

interface EditProjectVisualCardProps {
  idx: number;
  img: string;
  startDate: string;
  endDate: string;
  title: string;
  stack: string[];
}

const EditProjectVisualCard = ({ idx, img, startDate, endDate, title, stack }: EditProjectVisualCardProps) => {
  const fallbackImages = [ExThumbnail1, ExThumbnail2, ExThumbnail3, ExThumbnail4, ExThumbnail5, ExThumbnail6];
  const displayImg = img || fallbackImages[idx % fallbackImages.length];

  return (
    <E.EditProjectVisualCard $isImgLeft={idx % 2 === 0}>
      <E.ImgWrapper $isImgLeft={idx % 2 === 0} $img={!!displayImg}>
        <>
          <img src={displayImg} alt={`${title}이미지`} />
          <img src={displayImg} alt={`${title}이미지`} />
        </>
      </E.ImgWrapper>

      <E.InfoWrapper $isImgLeft={idx % 2 === 0}>
        <E.ProjectName>Main Project</E.ProjectName>

        <E.Link $isImgLeft={idx % 2 === 0}>
          <GithubIcon />
          <E.Date>
            {!endDate && startDate.slice(0, 10)}
            {endDate && (
              <>
                {startDate.slice(0, 10)} - {endDate.slice(0, 10)}
              </>
            )}
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
