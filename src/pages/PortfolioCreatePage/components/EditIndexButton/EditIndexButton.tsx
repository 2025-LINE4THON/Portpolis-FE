import * as E from './EditIndexButton.styles';

interface EditIndexButtonProps {
  index: string;
  text: string;
}

const EditIndexButton = ({ index, text }: EditIndexButtonProps) => {
  return (
    <E.EditIndexButton>
      <E.Index>{index}</E.Index>
      <p>{text}</p>
    </E.EditIndexButton>
  );
};

export default EditIndexButton;
