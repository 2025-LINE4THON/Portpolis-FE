import * as H from './HomeButton.styles';

interface HomeButtonProps {
  Icon: React.ReactNode;
  text: string;
  to: string;
}

const HomeButton = ({ Icon, text, to }: HomeButtonProps) => {
  return (
    <H.HomeButton>
      <H.StyledLink to={to}>
        <H.IconWrapper>{Icon}</H.IconWrapper>
        <H.Menu>{text}</H.Menu>
      </H.StyledLink>
    </H.HomeButton>
  );
};

export default HomeButton;
