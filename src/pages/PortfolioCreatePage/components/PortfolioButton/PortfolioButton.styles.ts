import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const PortfolioButton = styled.button<{
  $disabled: boolean | undefined;
  $maxWidth: number | undefined;
  $fontSize: number | undefined;
}>`
  max-width: ${({ $maxWidth }) => `${$maxWidth}px`};
  width: 100%;

  border-radius: 11px;
  padding: 12px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${palette.white};
  font-size: ${({ $fontSize }) => `${$fontSize}px`};
  font-weight: 700;
  line-height: 175%;

  background-color: ${({ $disabled }) => ($disabled ? palette.neutral.neutral200 : palette.primary.primaryMain)};

  transition: background-color 500ms ease-in-out;
`;
