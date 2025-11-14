import { postPortfolios } from '@/apis/PortfolioCreatePage/edit';
import type { RequestPortfolios } from '@/types/PortfolioCreatePage/edit';

import { useMutation } from '@tanstack/react-query';

const usePostPortfolios = () => {
  return useMutation({
    mutationFn: (body: RequestPortfolios) => postPortfolios(body),
  });
};

export default usePostPortfolios;
