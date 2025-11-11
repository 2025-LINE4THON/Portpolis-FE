import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const PublishImage = styled.div`
  width: 100%;

  border-radius: 0 0 15px 15px;
  overflow: hidden;

  position: relative;

  img {
    width: 100%;
    height: 281px;
    object-fit: cover;
  }
`;

export const UploadImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  cursor: pointer;

  display: flex;
  gap: 23px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${palette.white};
`;
