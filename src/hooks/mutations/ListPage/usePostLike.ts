import { postLike } from '@/apis/ListPage/list';
import { queryClient } from '@/App';
import { useMutation } from '@tanstack/react-query';

const usePostLike = () => {
  return useMutation({
    mutationFn: (id: number) => postLike(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['search'],
        exact: false,
      });
    },
  });
};

export default usePostLike;
