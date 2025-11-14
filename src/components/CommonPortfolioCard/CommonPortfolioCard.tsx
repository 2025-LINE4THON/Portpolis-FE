import Likes from '../likes';
import * as P from './CommonPortfolioCard.styles';
import EyeIcon from '@assets/PortfolioCreatePage/icon-visibility.svg?react';
import Heart from '@assets/common/icon-heart.svg?react';
import HeartFull from '@assets/common/icon-heart-full.svg?react';
import { useState } from 'react';

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
  hasHeart?: boolean;
  onClickHeart?: () => void;
  onClickDeleteHeart?: () => void;
  likesCount?: number;
  isLiked?: boolean;
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
  const [isCardHovered, setIsCardHovered] = useState(false);

  const handleCardClick = () => {
    onClick?.();
  };

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <P.CommonPortfolioCard
      $width={$width || 441}
      $height={$height || 291}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}>
      <P.LikesWrapper onClick={handleLikeClick}>
        <Likes
          portfolioId={portfolioId}
          initialIsLiked={isLiked || false}
          initialLikesCount={likeCount || 0}
          externalHovered={isCardHovered}
        />
      </P.LikesWrapper>
      <P.Card onClick={handleCardClick}>
        {img && <img src={img} alt={title} />}
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
      </P.Card>
    </P.CommonPortfolioCard>
  );
};

export default CommonPortfolioCard;
