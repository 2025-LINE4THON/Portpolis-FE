import * as P from './PortfolioButton.styles';

interface PortfolioButtonProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  maxWidth?: number;
}

const PortfolioButton = ({ text, disabled, onClick, maxWidth }: PortfolioButtonProps) => {
  return (
    <P.PortfolioButton disabled={disabled} onClick={onClick} $disabled={disabled} $maxWidth={maxWidth}>
      {text}
    </P.PortfolioButton>
  );
};

export default PortfolioButton;
