import styled from '@emotion/styled';
import palette from '@/styles/theme';

export const SignupPage = styled.div``;

export const CheckIdBtn = styled.button`
  color: white;
  font-size: 13px;
  font-weight: 500;
  line-height: 175%;
  height: 30px;
  width: 80px;

  border-radius: 11px;
  background-color: ${palette.primary.primary500};

  &:disabled {
    background-color: ${palette.neutral.neutral300};
    cursor: not-allowed;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CheckBox = styled.div`
  height: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${palette.neutral.neutral300};
  font-size: 12px;
  font-weight: 500;
  line-height: 175%;
`;

export const CheckInput = styled.input`
  appearance: none;

  width: 13px;
  height: 13px;

  border: 1px solid ${palette.neutral.neutral300};
  border-radius: 22px;
  cursor: pointer;

  position: relative;

  &:checked {
    background-color: ${palette.neutral.neutral300};
  }

  &:checked::after {
    content: '✔';

    font-size: 8px;
    color: white;

    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -55%);
  }
`;
