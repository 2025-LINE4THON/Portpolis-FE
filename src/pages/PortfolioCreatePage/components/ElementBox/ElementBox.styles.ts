import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const ElementBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const ElementWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Number = styled.div<{ $number: number }>`
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  color: ${palette.white};
  font-size: 13px;
  font-weight: 700;
  line-height: 175%;
  background-color: ${({ $number }) =>
    $number === 1
      ? palette.primary.primary300
      : $number === 2
        ? palette.primary.primary500
        : palette.primary.primary700};
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.div`
  color: ${palette.neutral.neutral700};
  font-size: 14px;
  font-weight: 600;
  line-height: normal;

  span {
    color: ${palette.danger.default};
  }
`;

export const SubTitle = styled.p`
  color: ${palette.neutral.neutral300};
  font-size: 12px;
  font-weight: 500;
  line-height: 175%;
`;
