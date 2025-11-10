import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const Template = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  padding: 0 81px;
  margin-top: 143px;

  p {
    color: ${palette.gray.gray777};
  }
`;

export const CardLayout = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  flex-wrap: nowrap;

  margin-top: 3px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
