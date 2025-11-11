import Template from './components/Template/Template';
import * as P from './PortfolioCreatePage.styles';
import Element from './components/Element/Element';
import { usePortfolio } from '@/context/PortfolioContext';
import Edit from './components/Edit/Edit';
import Publish from './components/Publish/Publish';

const PortfolioCreatePage = () => {
  const { level, setLevel } = usePortfolio();

  return (
    <>
      {level !== 'edit' && level !== 'publish' && <P.BackGroundIcon />}
      {level === 'publish' && <P.PublishBackGroundIcon />}

      <P.PortfolioCreatePage>
        {/* 1. 템플릿 선택 */}
        {level === 'template' && <Template setLevel={setLevel} />}

        {/* 요소 선택 */}
        {level === 'element' && <Element setLevel={setLevel} />}

        {/* 소개 문구 수정 */}
        {level === 'edit' && <Edit />}

        {/* 발행 화면 */}
        {level === 'publish' && <Publish />}
      </P.PortfolioCreatePage>
    </>
  );
};

export default PortfolioCreatePage;
