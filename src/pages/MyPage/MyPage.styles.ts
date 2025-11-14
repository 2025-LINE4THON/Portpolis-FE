import palette from '@/styles/theme';
import styled from '@emotion/styled';
import BackgroundSvg from '@assets/common/background-gradient-circle.svg?react';

export const Background = styled(BackgroundSvg)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const MyPage = styled.div`
  overflow: hidden;
  min-width: 930px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 63px 0;

  display: flex;
  flex-direction: column;
  gap: 33px;
  position: relative;
  z-index: 5;
`;

export const Header = styled.div`
  margin-bottom: 7px;
  padding: 0 144px;
`;

export const H3 = styled.div`
  color: ${palette.neutral.neutral950};
  font-size: 20px;
  font-weight: 600;
  line-height: 175%;
`;

export const B1 = styled.div`
  color: ${palette.neutral.neutral500};
  font-size: 16px;
  font-weight: 500;
  line-height: 175%;
`;

export const Job = styled.div`
  color: white;
  font-size: 13px;
  font-weight: 500;
  line-height: 175%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  border-radius: 11px;
  background: ${palette.primary.primary500};
`;

export const MyInfo = styled.div`
  color: ${palette.neutral.neutral400};

  font-size: 14px;
  font-weight: 500;
  line-height: 200%;

  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const MyInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 28px;
  padding: 0 144px;
`;

export const ProfileModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProfileRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const Textarea = styled.textarea`
  margin-top: 22px;
  resize: none;
  padding: 32px 34px;
  border-radius: 22px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
  border: none;
  outline: none;

  color: black;
  font-size: 14px;
  font-weight: 500;

  ::placeholder {
    color: ${palette.neutral.neutral300};
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 35px;
`;

export const MyLink = styled.div`
  width: 220px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  a {
    width: calc(25% - 12px);
    display: flex;
    justify-content: center;
  }
`;
