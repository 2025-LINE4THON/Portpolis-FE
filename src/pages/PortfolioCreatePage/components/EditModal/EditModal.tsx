import palette from '@/styles/theme';
import * as E from './EditModal.styles';
import Warning from '@assets/PortfolioCreatePage/icon-warning.svg?react';
import type { SetStateAction } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';

interface EditModalProps {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

const EditModal = ({ setShowModal }: EditModalProps) => {
  const { setLevel } = usePortfolio();

  return (
    <>
      <E.Overlay onClick={() => setShowModal(false)} />

      <E.EditModal>
        <div>
          <Warning />

          <E.Title>뒤로 돌아가시겠습니까?</E.Title>
          <E.SubTitle>작성중인 내용이 사라집니다.</E.SubTitle>
        </div>

        <E.ButtonWrapper>
          <E.Button onClick={() => setLevel('element')} $width={146} $color={`${palette.neutral.neutral300}`}>
            뒤로 가기
          </E.Button>
          <E.Button
            onClick={() => setShowModal((prev) => !prev)}
            $width={277}
            $color={`${palette.primary.primaryMain}`}>
            계속 작업하기
          </E.Button>
        </E.ButtonWrapper>
      </E.EditModal>
    </>
  );
};

export default EditModal;
