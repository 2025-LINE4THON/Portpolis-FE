import styled from '@emotion/styled';
import palette from '@/styles/theme';

export const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 65px;
  padding: 38px 40px;

  border-radius: 22px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);

  width: 90%;
  max-width: 560px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PwdBtn = styled.button`
  outline: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 57px;
`;

export const Text = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${palette.neutral.neutral300};
`;
