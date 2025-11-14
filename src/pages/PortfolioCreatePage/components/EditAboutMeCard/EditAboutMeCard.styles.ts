import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const EditAboutMeCard = styled.div`
  border-radius: 22px;
  background: linear-gradient(180deg, #fff 0%, #e2f3ed 100%);

  padding: 37px 36px 50px 36px;

  max-width: 316px;
  width: 100%;
  height: 285px;

  display: flex;
  flex-direction: column;
  gap: 30px;

  position: relative;
  z-index: 4;
`;

export const TitleInput = styled.input`
  outline: none;
  border: none;

  background: none;

  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 175%;

  ::placeholder {
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 175%;

    color: ${palette.neutral.neutral900};
  }
`;

export const ContentInput = styled.textarea`
  outline: none;
  border: none;

  height: 100%;
  padding: 0;
  background: none;
  resize: none;

  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 175%;

  color: ${palette.neutral.neutral400};

  ::placeholder {
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 175%;

    color: ${palette.neutral.neutral400};
  }
`;

export const Title = styled.p`
  color: ${palette.neutral.neutral900};
  font-size: 16px;
  font-weight: 700;
  line-height: 175%;
  text-align: center;
`;

export const Content = styled.p`
  color: ${palette.neutral.neutral400};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 175%;
`;
