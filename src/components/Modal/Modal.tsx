import palette from '@/styles/theme';
import * as E from '@pages/PortfolioCreatePage/components/EditModal/EditModal.styles';
import Warning from '@assets/PortfolioCreatePage/icon-warning.svg?react';
import type { SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

interface EditModalProps {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
  content: string;
  buttonText: string;
  onclickBtn: () => void;
}

const Modal = ({ setShowModal, content, buttonText, onclickBtn }: EditModalProps) => {
  const navigate = useNavigate();

  return (
    <>
      <E.Overlay onClick={() => setShowModal(false)} />

      <E.EditModal>
        <div>
          <Warning />

          <E.Title>{content}</E.Title>
        </div>

        <E.ButtonWrapper>
          <E.Button onClick={() => navigate(-1)} $width={146} $color={`${palette.neutral.neutral300}`}>
            뒤로 가기
          </E.Button>
          <E.Button onClick={onclickBtn} $width={277} $color={`${palette.primary.primaryMain}`}>
            {buttonText}
          </E.Button>
        </E.ButtonWrapper>
      </E.EditModal>
    </>
  );
};

export default Modal;
