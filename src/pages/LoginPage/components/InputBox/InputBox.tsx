import * as I from './InputBox.styles';

interface InputBoxProps {
  text: string;
  isPwd: boolean;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  content?: React.ReactNode;
}

const InputBox = ({ text, isPwd, value, placeholder, onChange, content }: InputBoxProps) => {
  return (
    <I.InputBox>
      <I.Text>{text}</I.Text>
      <I.InputWrapper>
        <I.Input type={isPwd ? 'password' : 'text'} value={value} placeholder={placeholder} onChange={onChange} />
        {content && <div>{content}</div>}
      </I.InputWrapper>
    </I.InputBox>
  );
};

export default InputBox;
