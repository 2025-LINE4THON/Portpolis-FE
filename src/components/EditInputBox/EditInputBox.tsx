import * as E from './EditInputBox.styles';

interface EditInputBoxProps {
  title?: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditInputBox = ({ title, value, placeholder, onChange }: EditInputBoxProps) => {
  return (
    <E.EditInputBox>
      <E.Title>{title}</E.Title>
      <E.Input type="text" value={value} placeholder={placeholder} onChange={onChange} />
    </E.EditInputBox>
  );
};
export default EditInputBox;
