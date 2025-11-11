import styled from '@emotion/styled';
import palette from '@/styles/theme';

export const ActivityInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 175%;
`;

export const Input = styled.input`
  width: 100%;
  color: ${palette.neutral.neutral950};
  font-size: 17px;
  font-weight: 500;
  line-height: 175%;

  outline: none;
  border: none;
  padding: 21px 30px;
  border-radius: 22px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  padding: 21px 30px;
  border-radius: 22px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  height: 70px;
`;
