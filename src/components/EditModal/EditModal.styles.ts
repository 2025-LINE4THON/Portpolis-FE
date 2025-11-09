import styled from '@emotion/styled';
import palette from '@/styles/theme';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1999;
`;

export const EditModal = styled.div`
  z-index: 2000;
  width: 80%;
  max-width: 969px;
  padding: 47px 34px;
  display: flex;
  flex-direction: column;
  gap: 34px;
  border-radius: 22px;
  background: ${palette.neutral.neutral050};
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 175%;
`;
export const SaveBtn = styled.button`
  color: white;
  font-size: 14px;
  font-weight: 700;
  line-height: 175%;

  padding: 12px 10%;
  border-radius: 11px;
  background: ${palette.primary.primary500};
  width: fit-content;
  margin-left: auto;
`;
