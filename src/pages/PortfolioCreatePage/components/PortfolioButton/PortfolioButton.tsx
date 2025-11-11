import * as P from './PortfolioButton.styles';

interface PortfolioButtonProps {
  text: string | React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  maxWidth?: number;
  fontSize?: number;
}

const PortfolioButton = ({ text, disabled, onClick, maxWidth, fontSize }: PortfolioButtonProps) => {
  return (
    <P.PortfolioButton
      disabled={disabled}
      onClick={onClick}
      $disabled={disabled}
      $maxWidth={maxWidth}
      $fontSize={fontSize}>
      {text}
    </P.PortfolioButton>
  );
};

export default PortfolioButton;
