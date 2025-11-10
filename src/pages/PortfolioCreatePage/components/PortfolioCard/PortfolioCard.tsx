import * as P from './PortfolioCard.styles';

interface PortfolioCardProps {
  title: string;
  content: React.ReactNode;
  selected: boolean | null;
  onClick: () => void;
}

const PortfolioCard = ({ title, content, selected, onClick }: PortfolioCardProps) => {
  return (
    <P.PortfolioCard onClick={onClick} $selected={selected}>
      {/* <img src={''} /> */}

      <P.TextBox>
        <h3 className="b1-bold">{title}</h3>
        <P.Content>{content}</P.Content>
      </P.TextBox>

      <P.Button>미리보기</P.Button>
    </P.PortfolioCard>
  );
};

export default PortfolioCard;
