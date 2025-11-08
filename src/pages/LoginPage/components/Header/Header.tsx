import * as H from './Header.styles';
import GoBack from '@assets/onBoarding/icon-goback.svg';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  text: string;
}

const Hedaer = ({ text }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <H.Header>
      <img src={GoBack} style={{ width: '12px', cursor: 'pointer' }} onClick={() => navigate(-1)} />
      <H.Text>{text}</H.Text>
      <div style={{ width: '12px' }}></div>
    </H.Header>
  );
};

export default Hedaer;
