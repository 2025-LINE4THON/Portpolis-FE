import palette from '@/styles/theme';
import styled from '@emotion/styled';
import DividerPrimary from '@assets/PortfolioCreatePage/icon-divider-primary.svg?react';

export const Element = styled.div`
  padding: 0 20px;
  margin-top: 63px;

  p {
    color: ${palette.gray.gray777};
  }

  max-width: 1116px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ElementList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 38px;

  position: relative;
`;

export const DividerPrimaryIcon = styled(DividerPrimary)`
  position: absolute;
  left: 32px;
  top: 22px;
  z-index: -1;
  width: 100%;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
