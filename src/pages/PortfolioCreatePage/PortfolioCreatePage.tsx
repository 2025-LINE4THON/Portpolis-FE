import { useState } from 'react';
import Template from './components/Template/Template';
import * as P from './PortfolioCreatePage.styles';
import Element from './components/Element/Element';

export type PortfolioStep = 'template' | 'element' | 'edit' | 'publish';

const PortfolioCreatePage = () => {
  const [level, setLevel] = useState<PortfolioStep>('template');

  return (
    <>
      <P.BackGroundIcon />
      <P.PortfolioCreatePage>
        {/* 1. 템플릿 선택 */}
        {level === 'template' && <Template setLevel={setLevel} />}

        {/* 요소 선택 */}
        {level === 'element' && <Element setLevel={setLevel} />}
      </P.PortfolioCreatePage>
    </>
  );
};

export default PortfolioCreatePage;
