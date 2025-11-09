import styled from '@emotion/styled';
import palette from '@/styles/theme';

export const Button = styled.button`
  width: 100%;
  max-width: 693px;
  padding: 12px 0;
  border-radius: 11px;

  font-size: 20px;
  font-weight: 500;
  line-height: 175%;
  color: white;
  background-color: ${palette.primary.primary500};

  &:disabled {
    background-color: ${palette.neutral.neutral300};
    cursor: not-allowed;
  }
`;
