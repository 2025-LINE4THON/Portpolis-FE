import { getMeLicenses } from '@/apis/PortfolioCreatePage/element';
import { useQuery } from '@tanstack/react-query';

const useGetMeLicenses = () => {
  return useQuery({
    queryKey: ['license'],
    queryFn: getMeLicenses,
  });
};

export default useGetMeLicenses;
