import { getSearched } from '@/apis/HomePage/recommend';
import type { order } from '@/types/ListPage/list';
import { useQuery } from '@tanstack/react-query';

const useGetSearchPortfolio = ({ keyword, sort, template, isPublic }: order) => {
  return useQuery({
    queryKey: ['search', keyword, sort],
    queryFn: () => getSearched({ keyword, sort, template, isPublic }),
    staleTime: 0,
  });
};

export default useGetSearchPortfolio;
