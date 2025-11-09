import * as E from './EditModal.styles';
import x from '@assets/mypage/icon-x.svg';

interface EditModalProps {
  text?: string;
  onClickX?: () => void;
  content: React.ReactNode;
  onClickSave?: () => void;
}

const EditModal = ({ text, onClickX, content, onClickSave }: EditModalProps) => {
  return (
    <E.ModalOverlay>
      <E.EditModal>
        <E.ModalHeader>
          <E.ModalTitle>{text}</E.ModalTitle>
          <img src={x} onClick={onClickX} style={{ cursor: 'pointer' }} />
        </E.ModalHeader>
        {content}
        {onClickSave && (
          <E.SaveBtn type="submit" onClick={onClickSave}>
            저장하기
          </E.SaveBtn>
        )}
      </E.EditModal>
    </E.ModalOverlay>
  );
};

export default EditModal;
