import styled from '@emotion/styled';
import palette from '@/styles/theme';
import BackgroundSvg from '@assets/common/background-gradient-circle.svg?react';

export const Background = styled(BackgroundSvg)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 5;
`;

export const Header = styled.div`
  color: ${palette.primary.primary500};
  font-size: 25px;
  font-weight: 600;
  line-height: 175%;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 65px;
  padding: 38px 40px;

  border-radius: 22px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);

  width: 90%;
  max-width: 484px;
  background-color: white;
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

export const ErrorMsg = styled.div`
  color: ${palette.danger.default};
  font-size: 12px;
  font-weight: 500;
  line-height: 175%;
  position: relative;
  bottom: 10px;
`;
