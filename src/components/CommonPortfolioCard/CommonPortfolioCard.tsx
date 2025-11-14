import * as P from './CommonPortfolioCard.styles';
import EyeIcon from '@assets/PortfolioCreatePage/icon-visibility.svg?react';
import Heart from '@assets/common/icon-heart.svg?react';
import HeartFull from '@assets/common/icon-heart-full.svg?react';
import { useState } from 'react';

interface PortfolioCardProps {
  img?: string;
  title: string;
  name: string;
  views?: number;
  date?: string;
  $width?: number;
  $height?: number;
  onClick?: () => void;
  hasHeart?: boolean;
  onClickHeart?: () => void;
  onClickDeleteHeart?: () => void;
  likesCount?: number;
  isLiked?: boolean;
}

const CommonPortfolioCard = ({
  img,
  title,
  name,
  views,
  date,
  $width,
  $height,
  onClick,
  hasHeart,
  onClickHeart,
  onClickDeleteHeart,
  likesCount,
  isLiked,
}: PortfolioCardProps) => {
  const [liked, setLiked] = useState(isLiked);

  const handleClickHeart = (e: React.MouseEvent) => {
    e.stopPropagation();

    setLiked((prev) => {
      const next = !prev;

      if (next) {
        onClickHeart?.();
      } else {
        onClickDeleteHeart?.();
      }

      return next;
    });
  };

  return (
    <P.CommonPortfolioCard $width={$width || 441} $height={$height || 291} onClick={onClick}>
      <P.Card>
        {img && <img src={img} />}
        {hasHeart && (
          <P.HeartWrapper className="child">
            {liked && <HeartFull className="child" onClick={handleClickHeart} />}
            {!liked && <Heart className="child" onClick={handleClickHeart} />}
            <p>{likesCount}</p>
          </P.HeartWrapper>
        )}

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
