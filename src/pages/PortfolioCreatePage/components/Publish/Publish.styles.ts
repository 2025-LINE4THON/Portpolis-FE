import styled from '@emotion/styled';
import DownloadImage from '@assets/PortfolioCreatePage/icon-download.svg?react';
import palette from '@/styles/theme';

export const Publish = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 20px;
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
