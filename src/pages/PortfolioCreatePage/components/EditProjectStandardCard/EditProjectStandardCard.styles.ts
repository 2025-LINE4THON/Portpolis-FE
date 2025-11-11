import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const EditProjectStandardCard = styled.div`
  border-radius: 22px;
  background-color: ${palette.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  width: 308px;
  height: 306px;
  padding: 19px 30px;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ImageWrapper = styled.div`
  width: 248px;
  height: 160px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Text = styled.p<{ $color: string; $size: number; $weight?: number }>`
  color: ${({ $color }) => $color};
  font-size: ${({ $size }) => `${$size}px`};
  font-style: normal;
  font-weight: ${({ $weight }) => ($weight ? $weight : 600)};
  line-height: 175%;
`;
