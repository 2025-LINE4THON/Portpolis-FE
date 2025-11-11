import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const EditButton = styled.button`
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${palette.primary.primary500};

  position: absolute;
  top: 40px;
  right: 32px;

  color: ${palette.white};

  transition: all 500ms ease-in-out;

  :hover {
    background-color: ${palette.primary.primary600};
  }

  :active {
    background-color: ${palette.primary.primary700};
  }
`;
