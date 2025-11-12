import palette from '@/styles/theme';
import styled from '@emotion/styled';
import Ellipse from '@assets/common/icon-gradient-ellipse-bottom.svg?react';

export const ListPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1196px;
  width: 100%;
  margin: 0 auto;

  padding: 0 20px;

  position: relative;
  z-index: 9;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  width: 100%;
  gap: 46px;
`;

export const Result = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  margin-top: 48px;

  .b1 {
    color: ${palette.neutral.neutral300};
  }
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  max-width: 1130px;
  width: 100%;
`;

export const NoResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 33px;

  margin-top: 183px;
`;

export const Text = styled.p<{ $color: string; $size: number }>`
  color: ${({ $color }) => $color};
  font-size: ${({ $size }) => `${$size}px`};

  font-weight: 500;
  line-height: 175%;
  text-align: center;

  :nth-of-type(2) {
    margin-top: 6px;
  }
`;

export const EllipseIcon = styled(Ellipse)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
`;
