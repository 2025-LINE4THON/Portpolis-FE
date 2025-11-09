import styled from '@emotion/styled';
import palette from '@/styles/theme';

export const ProjectItem = styled.div`
  width: 308px;
  padding: 19px 30px;
  border-radius: 22px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Info = styled.div``;

export const Period = styled.div`
  color: ${palette.neutral.neutral200};
  font-size: 12px;
  font-weight: 500;
  line-height: 175%;
`;

export const Title = styled.div`
  color: ${palette.neutral.neutral800};
  font-size: 14px;
  font-weight: 600;
  line-height: 175%;
`;

export const Private = styled.div<{ isPrivate: boolean }>`
  font-size: 12px;
  font-weight: 500;
  line-height: 175%;
  border-radius: 11px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;

  background-color: ${({ isPrivate }) => (isPrivate ? palette.neutral.neutral200 : palette.primary.primary100)};
  color: ${({ isPrivate }) => (isPrivate ? palette.neutral.neutral800 : palette.primary.primary600)};
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TagList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Tag = styled.div`
  color: ${palette.neutral.neutral800};
  font-size: 12px;
  font-weight: 500;
  line-height: 175%;

  padding: 0 10px;
  border-radius: 11px;
  background: ${palette.neutral.neutral100};
`;

export const Role = styled.div`
  color: ${palette.primary.primary500};
  font-size: 20px;
  font-weight: 800;
  line-height: 175%;
`;

export const PortfolBtns = styled.div`
  display: flex;
  gap: 9px;
  margin-top: 10px;
`;

export const PortfolBtn = styled.button`
  padding: 3px 26px;
  border-radius: 11px;
  color: ${palette.danger.default};
  border: 1px solid ${palette.danger.default};
`;
