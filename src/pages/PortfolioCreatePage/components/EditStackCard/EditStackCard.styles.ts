import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const EditStackCard = styled.div`
  max-width: 524px;
  width: 100%;
  height: 517px;

  border-radius: 22px;
  background-color: ${palette.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);

  padding: 45px 48px 40px 48px;

  display: flex;
  flex-direction: column;
  gap: 27px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  gap: 32px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Stack = styled.div`
  color: ${palette.neutral.neutral300};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
`;

export const BarWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 365px;
`;

export const Bar = styled.div`
  max-width: 365px;
  width: 100%;
  height: 4px;
  background-color: ${palette.neutral.neutral300};

  position: relative;
`;

export const PercentBar = styled.div<{ $percent: number }>`
  position: absolute;
  left: 0;
  width: ${({ $percent }) => `${$percent}%`};
  height: 4px;
  background: ${palette.primary.primary500};
`;

export const Circle = styled.div<{ $percent: number }>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${palette.primary.primary500};

  position: absolute;
  right: 0;
  bottom: 50%;
  transform: translateY(50%);

  display: ${({ $percent }) => ($percent === 0 ? 'none' : 'block')};
`;

export const Percent = styled.p`
  position: absolute;
  top: 9px;
  left: 0;

  color: ${palette.primary.primary500};
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
`;
