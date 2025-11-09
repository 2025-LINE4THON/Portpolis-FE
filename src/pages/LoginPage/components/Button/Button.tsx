import * as B from './Button.styles';

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button = ({ text, onClick, disabled }: ButtonProps) => {
  return (
    <B.Button type="submit" onClick={onClick} disabled={disabled}>
      {text}
    </B.Button>
  );
};

export default Button;
