import styled from '@emotion/styled';

import BG from '@assets/common/background-gradient-circle.svg?react';
import Ellipse from '@assets/common/icon-gradient-ellipse.svg?react';
import Cards from '@assets/HomePage/icon-cards.svg?react';

import palette from '@/styles/theme';

export const HomeIntro = styled.div`
  position: relative;
  z-index: 6;
  height: calc(100dvh - 80px);

  overflow: hidden;

  padding: 0 20px;
`;

export const BGIcon = styled(BG)`
  position: absolute;
  top: 0;
  z-index: 5;

  width: 100%;
  object-fit: contain;
`;

export const EllipseIcon = styled(Ellipse)`
  position: absolute;
  bottom: 0;
  z-index: 4;

  width: 100%;
  object-fit: cover;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  margin-top: 50px;

  text-align: center;
  font-style: normal;

  h1 {
    color: ${palette.neutral.neutral950};
  }

  span {
    color: ${palette.primary.primaryMain};
  }

  h1,
  span {
    font-size: 25px;
    font-weight: 600;
    line-height: 155%;
  }

  h3 {
    color: rgba(136, 136, 136, 0.5);
    font-size: 17px;
    font-weight: 500;
    line-height: 175%;
  }
`;

export const CardsIcon = styled(Cards)`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
