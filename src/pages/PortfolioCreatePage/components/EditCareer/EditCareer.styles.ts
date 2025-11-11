import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Circle from '@assets/PortfolioCreatePage/bg-circle-primary100.svg?react';

export const EditCareer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 138px;
  position: relative;
`;

export const StyledSlider = styled(Slider)`
  position: relative;

  .slick-track {
    display: flex;
  }

  .slick-slide > div {
    display: flex;
    justify-content: center;
  }

  .slick-slide > div {
    padding: 50px 0;
  }

  .slick-slide {
    margin: 0 15px;
  }
`;

export const PrevButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

export const NextButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

export const CircleBg = styled(Circle)`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  object-fit: cover;
  width: 100%;
`;
