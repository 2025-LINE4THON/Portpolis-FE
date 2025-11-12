import styled from '@emotion/styled';

export const EditInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  overflow: visible;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 175%;
`;

export const Input = styled.input`
  padding: 15px 21px;
  border-radius: 22px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
  border: none;
  outline: none;
`;
