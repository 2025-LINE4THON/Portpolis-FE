import * as P from './PortfolioButton.styles';

interface PortfolioButtonProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

const PortfolioButton = ({ text, disabled, onClick }: PortfolioButtonProps) => {
  return (
    <P.PortfolioButton disabled={disabled} onClick={onClick} $disabled={disabled}>
      {text}
    </P.PortfolioButton>
  );
};

export default PortfolioButton;
