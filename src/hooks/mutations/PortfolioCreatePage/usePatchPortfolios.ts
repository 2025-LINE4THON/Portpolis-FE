import { patchPortfolios } from '@/apis/PortfolioCreatePage/edit';
import type { RequestPortfolios } from '@/types/PortfolioCreatePage/edit';
import { useMutation } from '@tanstack/react-query';

export const usePatchPortfolios = () => {
  return useMutation({
    mutationFn: (variables: { body: RequestPortfolios; portfolioId: number }) =>
      patchPortfolios(variables.body, variables.portfolioId),
  });
};
