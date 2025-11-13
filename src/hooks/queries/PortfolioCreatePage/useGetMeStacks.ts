import { getMeStacks } from '@/apis/PortfolioCreatePage/element';
import { useQuery } from '@tanstack/react-query';

const useGetMeStacks = () => {
  return useQuery({
    queryKey: ['stacks'],
    queryFn: getMeStacks,
  });
};

export default useGetMeStacks;
