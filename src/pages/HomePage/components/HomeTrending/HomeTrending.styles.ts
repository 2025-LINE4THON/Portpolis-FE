import palette from '@/styles/theme';
import styled from '@emotion/styled';
import Ellipse from '@assets/common/icon-gradient-ellipse-bottom.svg?react';

export const HomeTrending = styled.div`
  position: relative;
  z-index: 11;
  background-color: ${palette.white};
  height: 100dvh;

  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const EllipseIcon = styled(Ellipse)`
  position: absolute;
  top: 0;
  z-index: -1;

  width: 100%;
  object-fit: contain;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 110px;

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

export const SliderDiv = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
