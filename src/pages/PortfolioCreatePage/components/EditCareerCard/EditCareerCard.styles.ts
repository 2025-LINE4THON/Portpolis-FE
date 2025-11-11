import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const EditCareerCard = styled.div`
  padding: 29px 41px;
  border-radius: 22px;
  background-color: ${palette.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);

  width: 410px;
  height: 247px;

  display: flex;
  flex-direction: column;
  gap: 28px;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div<{ $color: string }>`
  color: ${({ $color }) => $color};
`;

export const GrayText = styled(Text)<{ $size: number }>`
  font-size: ${({ $size }) => `${$size}px`};
  font-weight: 400;
  line-height: 175%;

  flex: 1;
`;

export const Textarea = styled.textarea`
  flex: 1;
  width: 100%;
  height: 100%;

  outline: none;
  border: none;
  resize: none;

  color: ${palette.neutral.neutral500};
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 175%;

  ::placeholder {
    color: ${palette.neutral.neutral500};
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 400;
    line-height: 175%;
  }
  /* border: none; */
`;
