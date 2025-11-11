import type { SetStateAction } from 'react';
import * as E from './EditHeader.styles';
import ArrowIcon from '@assets/PortfolioCreatePage/icon-arrow-left.svg?react';

interface EditHeaderProps {
  text: string;
  subText?: string;
  setShowModal?: React.Dispatch<SetStateAction<boolean>>;
  onClick?: () => void;
}

const EditHeader = ({ text, subText, setShowModal, onClick }: EditHeaderProps) => {
  const handleClick = () => {
    if (setShowModal) setShowModal((prev) => !prev);
    if (onClick) onClick();
  };

  return (
    <E.PublishHeader>
      <ArrowIcon onClick={handleClick} />

      <div>
        <h2 className="h3">{text}</h2>
        <p className="b1">{subText}</p>
      </div>
    </E.PublishHeader>
  );
};

export default EditHeader;
