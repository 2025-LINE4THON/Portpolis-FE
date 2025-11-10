import * as E from './EditHeader.styles';
import ArrowIcon from '@assets/PortfolioCreatePage/icon-arrow-left.svg?react';

const EditHeader = () => {
  return (
    <E.PublishHeader>
      <ArrowIcon />
      <h2 className="h3">포트폴리오 생성</h2>
    </E.PublishHeader>
  );
};

export default EditHeader;
