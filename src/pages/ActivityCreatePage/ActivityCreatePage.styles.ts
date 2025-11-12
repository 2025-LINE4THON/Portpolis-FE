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

  min-width: 597px;
  width: 80%;
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
  min-width: 597px;
  width: 80%;
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
  padding: 0 76px 52px;
  display: flex;
  flex-direction: column;
  gap: 11px;

  overflow: hidden;
  min-width: 930px;
  max-width: 1280px;
  margin: 0 auto;
`;

export const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const ExtraInfo = styled.div`
  padding: 20px 76px 52px;
  display: flex;
  flex-direction: row;
  gap: 20px;

  overflow: hidden;
  min-width: 930px;
  max-width: 1280px;
  margin: 0 auto;
`;

export const InfomationBlocks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InvisibleInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
`;

export const Checkbox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3px;
  margin-top: 7px;
`;

export const Tag = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 500;
  padding: 6px;
  border-radius: 11px;
  background: ${palette.primary.primary500};
  width: fit-content;
  white-space: nowrap;
`;

export const InvisibleTextarea = styled.textarea`
  resize: none;
  border: none;
  outline: none;
  height: 80px;
  overflow: scroll;

  color: black;
  font-size: 14px;
  font-weight: 500;
  line-height: 175%;

  ::placeholder {
    color: ${palette.neutral.neutral300};
  }
`;

export const RoundedContent = styled.div`
  padding: 10px 30px;
  border-radius: 22px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  color: ${palette.primary.primary500};
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  row-gap: 15px;
  margin-bottom: 10px;
`;

export const Stack = styled.div`
  color: ${palette.neutral.neutral700};
  font-size: 12px;
  font-weight: 500;
  padding: 6px 7px;
  border-radius: 11px;
  background: ${palette.neutral.neutral100};
`;

export const ImageBox = styled.img`
  width: 57px;
  height: 57px;
  border-radius: 11px;
`;
