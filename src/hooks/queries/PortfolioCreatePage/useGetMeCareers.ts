import { getMeCareers } from '@/apis/PortfolioCreatePage/element';
import { useQuery } from '@tanstack/react-query';

const useGetMeCareers = () => {
  return useQuery({
    queryKey: ['careers'],
    queryFn: getMeCareers,
  });
};

export default useGetMeCareers;
