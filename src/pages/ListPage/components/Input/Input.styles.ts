import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  svg {
    position: absolute;
    left: 8px;
  }
`;

export const Input = styled.input`
  padding: 8px 8px 8px 40px;
  max-width: 1196px;
  width: 100%;

  border-radius: 999px;
  border: 1px solid #191819;
  background-color: rgba(255, 255, 255, 0.2);

  color: ${palette.neutral.neutral950};

  outline: none;

  ::placeholder {
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: ${palette.neutral.neutral400};
  }
`;
