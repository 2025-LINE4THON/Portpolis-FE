import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const MyPage = styled.div`
  overflow: hidden;
  padding: 93px 148px 0 140px;

  display: flex;
  flex-direction: column;
  gap: 33px;
`;

export const Header = styled.div`
  margin-bottom: 7px;
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
`;
