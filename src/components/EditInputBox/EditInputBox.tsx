import * as E from './EditInputBox.styles';

interface EditInputBoxProps {
  width: string;
  title?: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditInputBox = ({ width, title, value, placeholder, onChange }: EditInputBoxProps) => {
  return (
    <E.EditInputBox style={{ width: width }}>
      <E.Title>{title}</E.Title>
      <E.Input type="text" value={value} placeholder={placeholder} onChange={onChange} />
    </E.EditInputBox>
  );
};
export default EditInputBox;
