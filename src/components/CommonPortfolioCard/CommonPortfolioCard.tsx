import * as P from './CommonPortfolioCard.styles';
import EyeIcon from '@assets/PortfolioCreatePage/icon-visibility.svg?react';

interface PortfolioCardProps {
  img?: string;
  title: string;
  name: string;
  $width?: number;
  $height?: number;
}

const CommonPortfolioCard = ({ img, title, name, $width, $height }: PortfolioCardProps) => {
  return (
    <P.CommonPortfolioCard $width={$width || 441} $height={$height || 291}>
      <P.Card>
        {img && <img src={img} />}

        <P.InfoWrapper>
          <P.Title>{title}</P.Title>

          <P.FlexBox $justify="space-between">
            <P.FlexBox $justify="start">
              <P.SubText $size={10.979}>{name}</P.SubText>
              <P.SubText $size={9.411}>{new Date().toLocaleDateString()}</P.SubText>
            </P.FlexBox>

            <P.FlexBox $justify="start">
              <EyeIcon />
              <P.SubText $size={10.979}>22233</P.SubText>
            </P.FlexBox>
          </P.FlexBox>
        </P.InfoWrapper>
      </P.Card>
    </P.CommonPortfolioCard>
  );
};

export default CommonPortfolioCard;
