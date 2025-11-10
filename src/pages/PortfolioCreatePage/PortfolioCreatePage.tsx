import Template from './components/Template/Template';
import * as P from './PortfolioCreatePage.styles';
import Element from './components/Element/Element';
import Publish from './components/Publish/Publish';
import { usePortfolio } from '@/context/PortfolioContext';

const PortfolioCreatePage = () => {
  const { level, setLevel } = usePortfolio();

  return (
    <>
      <P.BackGroundIcon />
      <P.PortfolioCreatePage>
        {/* 1. 템플릿 선택 */}
        {level === 'template' && <Template setLevel={setLevel} />}

        {/* 요소 선택 */}
        {level === 'element' && <Element setLevel={setLevel} />}

        {/* 소개 문구 수정 */}
        {level === 'publish' && <Publish />}
      </P.PortfolioCreatePage>
    </>
  );
};

export default PortfolioCreatePage;
