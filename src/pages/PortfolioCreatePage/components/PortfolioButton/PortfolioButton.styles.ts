import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const PortfolioButton = styled.button<{ $disabled: boolean | undefined }>`
  max-width: 379px;
  width: 100%;
  height: 60px;

  border-radius: 11px;
  padding: 12px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${palette.white};
  font-size: 20px;
  font-weight: 700;
  line-height: 175%;

  background-color: ${({ $disabled }) => ($disabled ? palette.neutral.neutral200 : palette.primary.primaryMain)};
`;
