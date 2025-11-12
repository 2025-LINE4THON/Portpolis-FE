import styled from '@emotion/styled';
import palette from '@/styles/theme';

export const CareerPage = styled.div`
  overflow: hidden;
  min-width: 930px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 33px 0 30px;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Header = styled.div``;

export const BoldText = styled.div`
  color: ${palette.neutral.neutral950};
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  line-height: 155%;
`;

export const SecondHeader = styled.div`
  padding: 0 144px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AddButton = styled.div`
  color: white;
  font-size: 13px;
  font-weight: 500;
  line-height: 175%;

  border-radius: 11px;
  background: ${palette.primary.primary500};

  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  padding: 3px 10px;
`;

export const ModalContent = styled.div`
  overflow: hidden;
  max-width: 1280px;
  padding: 5px;
`;

export const ModalHeader = styled.div`
  display: flex;
`;

export const InputContent = styled.div`
  color: black;
  font-size: 16px;
  font-weight: 500;
  line-height: 175%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  gap: 30px;
  margin-top: 12px;
`;

export const DeleteBtn = styled.button``;

export const StackRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const DotWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const Dot = styled.div<{ filled: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ filled }) => (filled ? palette.primary.primary500 : palette.neutral.neutral200)};
`;
