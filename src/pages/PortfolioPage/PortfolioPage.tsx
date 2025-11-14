import { useParams } from 'react-router-dom';
import * as P from './PortfolioPage.styles';
import useGetPortfolios from '@/hooks/queries/PortfolioCreatePage/useGetPortfolios';
import Edit from '../PortfolioCreatePage/components/Edit/Edit';

const PortfolioPage = () => {
  const { id } = useParams();
  const { data } = useGetPortfolios(Number(id));

  return (
    <P.PortfolioPage>
      <Edit data={data} editable={false} />
    </P.PortfolioPage>
  );
};

export default PortfolioPage;
