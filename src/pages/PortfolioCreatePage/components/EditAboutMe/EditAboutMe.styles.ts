import styled from '@emotion/styled';
import Divider from '@assets/PortfolioCreatePage/icon-divider-col-primary.svg?react';

export const EditAboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 31px;

  padding-bottom: 126px;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;

  position: relative;
  z-index: 4;
`;

export const DividerIcon = styled(Divider)`
  position: absolute;
  bottom: -236px;
  left: 50%;
  transform: translateX(-50%);

  z-index: 2;
`;
