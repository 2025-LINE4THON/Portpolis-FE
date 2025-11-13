import { getSearched } from '@/apis/HomePage/recommend';
import type { order } from '@/types/ListPage/list';
import { useQuery } from '@tanstack/react-query';

const useGetSearchPortfolio = ({ keyword, sort, template, isPublic }: order) => {
  return useQuery({
    queryKey: [keyword, sort, template, isPublic],
    queryFn: () => getSearched({ keyword, sort, template, isPublic }),
  });
};

export default useGetSearchPortfolio;
