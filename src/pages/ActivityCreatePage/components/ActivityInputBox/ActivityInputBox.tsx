import * as A from './ActivityInputBox.styles';
import palette from '@/styles/theme';

interface InputProps {
  width: string;
  text?: string;
  isRequired: boolean;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  content?: React.ReactNode;
}

const ActivityInputBox = ({ width, text, isRequired, name, value, placeholder, onChange, content }: InputProps) => {
  return (
    <A.ActivityInputBox style={{ width }}>
      <A.Text>
        {text} {isRequired && <span style={{ color: palette.danger.default }}>*</span>}
      </A.Text>
      {content ? (
        <A.Content>{content}</A.Content>
      ) : (
        <A.Input type="text" name={name} value={value} placeholder={placeholder} onChange={onChange} />
      )}
    </A.ActivityInputBox>
  );
};
export default ActivityInputBox;
