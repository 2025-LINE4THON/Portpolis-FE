import * as B from './Button.styles';

interface ButtonProps {
  text: string;
  isFilled: boolean;
  onClick: () => void;
}

const InputBox = ({ text, isFilled, onClick }: ButtonProps) => {
  return (
    <B.Button type="submit" isFilled={isFilled} onClick={onClick}>
      {text}
    </B.Button>
  );
};

export default InputBox;
