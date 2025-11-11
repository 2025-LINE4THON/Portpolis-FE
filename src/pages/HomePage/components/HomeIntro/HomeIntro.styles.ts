import styled from '@emotion/styled';

import BG from '@assets/common/background-gradient-circle.svg?react';
import Ellipse from '@assets/common/icon-gradient-ellipse.svg?react';
import Cards from '@assets/HomePage/icon-cards.svg?react';
import Arrow from '@assets/HomePage/icon-arrow-down.svg?react';

import palette from '@/styles/theme';
import { keyframes } from '@emotion/react';

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
  z-index: -1;

  width: 100%;
  object-fit: contain;
`;

export const cardAnimation = keyframes`
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
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

  animation: ${cardAnimation} 1000ms ease-in-out;
`;

export const CardsIcon = styled(Cards)`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;

  position: relative;

  animation: ${cardAnimation} 1000ms ease-in-out;
`;

const animation = keyframes`
  0% {
    opacity: 0;
  }
  30%{
    transform: translateX(-50%) translateY(-20px);
    opacity: 0;
  }
  50% {
    transform: translateX(-50%) translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(20px);
    opacity: 0;
  }
`;

export const ArrowIcon = styled(Arrow)`
  animation: ${animation} 1500ms ease-in-out infinite;

  position: absolute;
  z-index: -1;
  bottom: 43px;
  left: 50%;
  transform: translateX(-50%);
`;
