import styled from '@emotion/styled';
import palette from '@/styles/theme';

export const ActivityDetailPage = styled.div`
  position: relative;
  z-index: 5;
`;

export const BasicInfo = styled.div`
  margin-left: 15%;
`;

export const Date = styled.div`
  color: ${palette.neutral.neutral300};
  font-size: 18px;
  font-weight: 500;
  line-height: 155%;
`;

export const Title = styled.div`
  color: ${palette.neutral.neutral950};
  font-size: 25px;
  font-weight: 600;
  line-height: 155%;
`;

export const Tag = styled.div`
  color: white;
  font-size: 13px;
  font-weight: 700;
  line-height: 155%;
  padding: 6px 10px;
  border-radius: 22px;
  background: ${palette.neutral.neutral200};
`;
