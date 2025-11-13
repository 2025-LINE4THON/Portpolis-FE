import { getAllPortfolio } from '@/apis/ListPage/list';
import { useQuery } from '@tanstack/react-query';

const useGetAllPortfolios = () => {
  return useQuery({
    queryKey: ['all-portfolios'],
    queryFn: getAllPortfolio,
  });
};
export default useGetAllPortfolios;
