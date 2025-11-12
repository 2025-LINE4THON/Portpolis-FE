import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const Button = styled.button`
  width: 115px;
  height: 30px;

  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  border-radius: 11px;
  background: ${palette.primary.primaryMain};

  color: ${palette.white};

  font-size: 13px;
  font-weight: 500;
  line-height: 175%;
  white-space: nowrap;

  svg {
    align-self: center;
    flex-shrink: 0;
  }
`;
