import styled from '@emotion/styled';
import palette from '@/styles/theme';

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 693px;
`;

export const Text = styled.div`
  color: ${palette.neutral.neutral300};
  font-size: 17px;
  font-weight: 500;
  line-height: 175%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 9px 11px;
  border-radius: 11px;
  border: 1px solid ${palette.neutral.neutral300};
`;

export const Input = styled.input`
  width: 100%;
  color: ${palette.neutral.neutral950};
  font-size: 17px;
  font-weight: 500;
  line-height: 175%;

  outline: none;
  border: none;
`;
