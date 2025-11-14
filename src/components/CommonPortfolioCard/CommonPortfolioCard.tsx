import Likes from '../likes';
import * as P from './CommonPortfolioCard.styles';
import EyeIcon from '@assets/PortfolioCreatePage/icon-visibility.svg?react';

interface PortfolioCardProps {
  portfolioId: number;
  img?: string;
  title: string;
  name: string;
  views?: number;
  date?: string;
  $width?: number;
  $height?: number;
  isLiked?: boolean;
  likeCount?: number;
  onClick?: () => void;
}

const CommonPortfolioCard = ({
  portfolioId,
  img,
  title,
  name,
  views,
  date,
  $width,
  $height,
  isLiked,
  likeCount,
  onClick,
}: PortfolioCardProps) => {
  return (
    <P.CommonPortfolioCard $width={$width || 441} $height={$height || 291} onClick={onClick}>
      <P.Card>
        {img && <img src={img} />}

        <P.InfoWrapper>
          <P.Title>{title}</P.Title>

          <P.FlexBox $justify="space-between">
            <P.FlexBox $justify="start">
              <P.SubText $size={10.979}>{name}</P.SubText>
              <P.SubText $size={9.411}>{date?.slice(0, 10)}</P.SubText>
            </P.FlexBox>

            <P.FlexBox $justify="start">
              <EyeIcon />
              <P.SubText $size={10.979}>{views}</P.SubText>
            </P.FlexBox>
          </P.FlexBox>
        </P.InfoWrapper>
        <Likes portfolioId={portfolioId} initialIsLiked={isLiked || false} initialLikesCount={likeCount || 0} />
      </P.Card>
    </P.CommonPortfolioCard>
  );
};

export default CommonPortfolioCard;
