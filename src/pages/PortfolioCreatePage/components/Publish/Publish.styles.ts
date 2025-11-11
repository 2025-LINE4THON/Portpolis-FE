import styled from '@emotion/styled';
import DownloadImage from '@assets/PortfolioCreatePage/icon-download.svg?react';
import palette from '@/styles/theme';

export const Publish = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 20px;

  max-width: 1280px;
`;

export const HeaderWrapper = styled.div`
  position: relative;
`;

export const Upload = styled.div`
  width: 579px;
  height: 343px;
  border-radius: 22px;
  background-color: #f6f6f6;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 23px;
  }

  p {
    color: ${palette.neutral.neutral400};
  }

  div {
    padding: 10px;
    border-radius: 11px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${palette.neutral.neutral100};

    max-width: 84px;

    color: ${palette.neutral.neutral950};

    cursor: pointer;
  }
`;

export const DownloadIcon = styled(DownloadImage)`
  color: ${palette.gray.gray999};
`;

export const Thumbnail = styled.div`
  max-width: 375px;
  width: 100%;
  height: 293px;
  border-radius: 22px;
  background: ${palette.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  padding: 15px;

  display: flex;
  flex-direction: column;
`;

export const FlexBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  gap: 38px;

  margin-top: 140px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
  width: 100%;

  margin-top: 30px;

  p {
    color: black;
    max-width: 992px;
    width: 100%;
  }

  input {
    max-width: 992px;
    width: 100%;

    border-radius: 22px;
    background-color: ${palette.white};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

    padding: 22px 30px;

    outline: none;
    border: none;

    color: ${palette.neutral.neutral950};

    input::placeholder {
      color: ${palette.neutral.neutral200};
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`;

export const Input = styled.input`
  display: none;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 27px;

  div {
    display: flex;
    align-items: center;
    gap: 13px;
    width: 90px;
  }

  div p {
    color: ${palette.neutral.neutral900};
  }

  > p {
    color: ${palette.neutral.neutral200};
  }
`;

export const RangeBox = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 992px;
  width: 100%;

  margin-top: 47px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 992px;

  margin-top: 63px;
`;
