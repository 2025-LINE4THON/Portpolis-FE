import { getMeProjects } from '@/apis/PortfolioCreatePage/element';
import { useQuery } from '@tanstack/react-query';

const useGetMeProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: getMeProjects,
  });
};

export default useGetMeProjects;
