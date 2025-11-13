import * as I from './InputBox.styles';

interface InputBoxProps {
  text: string;
  isPwd: boolean;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  content?: React.ReactNode;
}

const InputBox = ({ text, isPwd, name, value, placeholder, onChange, content }: InputBoxProps) => {
  return (
    <I.InputBox>
      <I.Text>{text}</I.Text>
      <I.InputWrapper>
        <I.Input
          type={isPwd ? 'password' : 'text'}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {content && <div>{content}</div>}
      </I.InputWrapper>
    </I.InputBox>
  );
};

export default InputBox;
