import { getCheck } from '@/apis/PortfolioCreatePage/element';
import { useQuery } from '@tanstack/react-query';

const useGetCheck = () => {
  return useQuery({
    queryKey: ['projects', 'careers', 'stacks'],
    queryFn: getCheck,
  });
};

export default useGetCheck;
