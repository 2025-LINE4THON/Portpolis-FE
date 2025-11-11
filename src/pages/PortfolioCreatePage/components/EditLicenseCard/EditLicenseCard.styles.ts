import palette from '@/styles/theme';
import styled from '@emotion/styled';
import * as E from '@pages/PortfolioCreatePage/components/EditStackCard/EditStackCard.styles';

export const EditLicenseCard = styled(E.EditStackCard)`
  max-width: 409px;
  background: linear-gradient(180deg, ${palette.primary.primary500} 0%, #fff 100%);

  gap: 13px;

  p {
    color: ${palette.white};
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  color: ${palette.white};
`;
