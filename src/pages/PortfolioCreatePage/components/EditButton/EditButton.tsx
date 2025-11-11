import { usePortfolio } from '@/context/PortfolioContext';
import * as E from './EditButton.styles';

const EditButton = () => {
  const { setLevel } = usePortfolio();

  const handleSetLevel = () => {
    setLevel('publish');
  };
  return (
    <E.EditButton className="b2" onClick={handleSetLevel}>
      발행하기
    </E.EditButton>
  );
};

export default EditButton;
