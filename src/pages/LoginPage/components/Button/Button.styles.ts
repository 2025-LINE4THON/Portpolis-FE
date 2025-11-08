import styled from '@emotion/styled';
import palette from '@/styles/theme';

export const Button = styled.button<{ isFilled: boolean }>`
  width: 100%;
  max-width: 693px;
  padding: 12px 0;
  border-radius: 11px;

  color: white;
  background-color: ${({ isFilled }) => (isFilled ? palette.primary.primary500 : palette.neutral.neutral200)};
`;
