import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const CommonPortfolioCard = styled.div<{ $width: number; $height: number }>`
  display: flex;
  flex-direction: column;

  border-radius: 18px;
  overflow: hidden;

  width: ${({ $width }) => (`${$width}` ? `${$width}px` : '441px')};
  height: ${({ $height }) => (`${$height}` ? `${$height}px` : '291px')};
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #000 100%);
  position: relative;
  z-index: 5;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ::after {
    content: '';
    position: absolute;
    z-index: 6;
    inset: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #000 100%);
  }

  &:hover::after {
    background: linear-gradient(180deg, rgba(162, 237, 215, 0.2) 0%, ${palette.primary.primary700} 100%);
  }

  transition: background-color 500ms ease-in-out;

  cursor: pointer;

  &:hover .child {
    fill: ${palette.neutral.neutral950};
    color: ${palette.neutral.neutral950};
  }
`;

export const Title = styled.p`
  color: ${palette.white};
  font-size: 18.822px;
  font-weight: 600;
  line-height: 155%;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SubText = styled.p<{ $size: number }>`
  color: ${palette.white};
  font-size: ${({ $size }) => `${$size}px`};
  font-weight: 500;
  line-height: normal;
`;

export const InfoWrapper = styled.div`
  height: 100%;
  padding: 18px 22px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  position: absolute;
  z-index: 10;
  inset: 0;
`;

export const FlexBox = styled.div<{ $justify: string }>`
  display: flex;
  justify-content: ${({ $justify }) => $justify};
  align-items: center;
  gap: 6px;
  color: ${palette.white};
`;

export const HeartWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 28px;
  z-index: 20;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${palette.primary.primaryMain};

  :hover {
    color: ${palette.neutral.neutral950};
  }
`;
