import { getUsers } from '@/apis/PortfolioCreatePage/edit';
import { useQuery } from '@tanstack/react-query';

const useGetUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
};

export default useGetUsers;
