import styled from '@emotion/styled';
import BackGround from '@assets/PortfolioCreatePage/background-ellipse.svg?react';

export const PortfolioCreatePage = styled.div`
  position: relative;
  z-index: 8;
`;

export const BackGroundIcon = styled(BackGround)`
  position: fixed;
  top: 0;
  z-index: 5;

  width: 100vw;
  margin: 0 auto;
  object-fit: contain;
`;
