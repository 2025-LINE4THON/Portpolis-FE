import { getRecommend } from '@/apis/HomePage/recommend';
import { useQuery } from '@tanstack/react-query';

const useGetRecommend = () => {
  return useQuery({
    queryKey: ['recommend'],
    queryFn: getRecommend,
  });
};

export default useGetRecommend;
