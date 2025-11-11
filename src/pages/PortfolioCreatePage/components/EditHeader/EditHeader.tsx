import type { SetStateAction } from 'react';
import * as E from './EditHeader.styles';
import ArrowIcon from '@assets/PortfolioCreatePage/icon-arrow-left.svg?react';

interface EditHeaderProps {
  text: string;
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

const EditHeader = ({ text, setShowModal }: EditHeaderProps) => {
  return (
    <E.PublishHeader>
      <ArrowIcon onClick={() => setShowModal((prev) => !prev)} />
      <h2 className="h3">{text}</h2>
    </E.PublishHeader>
  );
};

export default EditHeader;
