import * as P from './PortfolioCard.styles';

interface PortfolioCardProps {
  title: string;
  content: React.ReactNode;
  selected: boolean | null;
  onClick: () => void;
  url: string;
}

const PortfolioCard = ({ title, content, selected, onClick, url }: PortfolioCardProps) => {
  return (
    <P.PortfolioCard onClick={onClick} $selected={selected} $url={url}>
      <P.TextBox>
        <h3 className="b1-bold">{title}</h3>
        <P.Content>{content}</P.Content>
      </P.TextBox>
    </P.PortfolioCard>
  );
};

export default PortfolioCard;
