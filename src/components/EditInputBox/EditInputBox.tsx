import * as E from './EditInputBox.styles';

interface EditInputBoxProps {
  width: string;
  title?: string;
  name?: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditInputBox = ({ width, title, name, value, placeholder, onChange }: EditInputBoxProps) => {
  return (
    <E.EditInputBox style={{ width: width }}>
      <E.Title>{title}</E.Title>
      <E.Input type="text" name={name} value={value} placeholder={placeholder} onChange={onChange} />
    </E.EditInputBox>
  );
};
export default EditInputBox;
