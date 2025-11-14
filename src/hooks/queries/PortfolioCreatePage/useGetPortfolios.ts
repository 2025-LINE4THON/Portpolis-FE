import { getPortfolios } from '@/apis/PortfolioCreatePage/edit';
import { useQuery } from '@tanstack/react-query';

const useGetPortfolios = (portfolioId: number) => {
  return useQuery({
    queryKey: ['portfolio', portfolioId],
    queryFn: () => getPortfolios(portfolioId),
  });
};

export default useGetPortfolios;
