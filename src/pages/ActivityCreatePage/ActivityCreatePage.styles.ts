import styled from '@emotion/styled';
import palette from '@/styles/theme';

export const ActivityCreatePage = styled.div``;

export const Header = styled.div<{ bgimg: string | null }>`
  position: relative;
  bottom: 100px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 20px;
  filter: drop-shadow(0 4px 11px rgba(0, 0, 0, 0.14));
  background-color: ${palette.neutral.neutral100};

  ${({ bgimg }) =>
    bgimg &&
    `
    background-image: url(${bgimg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `}
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
  margin-top: 20px;

  overflow: hidden;
  min-width: 1100px;
  max-width: 1280px;
  margin: 10px auto;
`;

export const GoBack = styled.img`
  cursor: pointer;
`;

export const H3 = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 175%;
`;

export const AddFileBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 23px;
  cursor: pointer;
  margin-top: 50px;
`;

export const B2 = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

export const FileHandleBtns = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;

  overflow: visible;
  min-width: 1100px;
  max-width: 1280px;
  margin: 10px auto;
`;

export const Btn = styled.button`
  padding: 10px;
  border-radius: 22px;
  background: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
`;

export const BasicInfo = styled.div`
  padding: 20px 76px 52px;
  display: flex;
  flex-direction: column;
  gap: 11px;

  overflow: hidden;
  min-width: 930px;
  max-width: 1280px;
  margin: 0 auto;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
