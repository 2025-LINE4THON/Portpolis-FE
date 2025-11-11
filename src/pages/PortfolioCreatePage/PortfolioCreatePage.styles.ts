import styled from '@emotion/styled';
import BackGround from '@assets/PortfolioCreatePage/background-ellipse.svg?react';
import PublishBackGround from '@assets/common/background-gradient-circle.svg?react';

export const PortfolioCreatePage = styled.div`
  position: relative;
  z-index: 8;

  display: flex;
  justify-content: center;
`;

export const BackGroundIcon = styled(BackGround)`
  position: fixed;
  top: 0;
  z-index: 5;

  width: 100vw;
  margin: 0 auto;
  object-fit: contain;
`;

export const PublishBackGroundIcon = styled(PublishBackGround)`
  position: fixed;
  z-index: 5;

  width: 100%;
`;
