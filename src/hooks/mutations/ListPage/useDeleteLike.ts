import { deleteLike } from '@/apis/ListPage/list';
import { queryClient } from '@/App';
import { useMutation } from '@tanstack/react-query';

const useDeleteLike = () => {
  return useMutation({
    mutationFn: (id: number) => deleteLike(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['search'],
        exact: false,
      });
    },
  });
};

export default useDeleteLike;
