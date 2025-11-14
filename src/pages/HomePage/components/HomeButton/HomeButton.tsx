import { useLocalStorage } from '@/hooks/useLocalStorage';
import * as H from './HomeButton.styles';
import { LOCAL_STORAGE_KEY } from '@/constants/key';
import { useNavigate } from 'react-router-dom';

interface HomeButtonProps {
  Icon: React.ReactNode;
  text: string;
  to: string;
}

const HomeButton = ({ Icon, text, to }: HomeButtonProps) => {
  const { getItem } = useLocalStorage(LOCAL_STORAGE_KEY.accessToken);
  const navigate = useNavigate();

  return (
    <H.HomeButton>
      <H.StyledLink
        to={to}
        onClick={(e) => {
          if (to !== '/signup') {
            const token = getItem();
            if (!token) {
              e.preventDefault();
              alert('로그인이 필요한 서비스입니다.');
              navigate('/login');
            }
          }
        }}>
        <H.IconWrapper>{Icon}</H.IconWrapper>
        <H.Menu>{text}</H.Menu>
      </H.StyledLink>
    </H.HomeButton>
  );
};

export default HomeButton;
