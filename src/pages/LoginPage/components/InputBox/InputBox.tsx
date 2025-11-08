import * as I from './InputBox.styles';

interface InputBoxProps {
  text: string;
  isPwd: boolean;
  placeholder: string;
  content?: React.ReactNode;
}

const InputBox = ({ text, isPwd, placeholder, content }: InputBoxProps) => {
  return (
    <I.InputBox>
      <I.Text>{text}</I.Text>
      <I.InputWrapper>
        <I.Input type={isPwd ? 'password' : 'text'} placeholder={placeholder} />
        {content && <div>{content}</div>}
      </I.InputWrapper>
    </I.InputBox>
  );
};

export default InputBox;
