import { useLocation, useNavigate } from 'react-router-dom';
import * as N from './Navbar.styles';
import { usePortfolio } from '@/context/PortfolioContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { level } = usePortfolio();

  const LINKS = [
    { id: 1, label: '내 커리어', to: '/career' },
    { id: 2, label: '둘러보기', to: '/list' },
    { id: 3, label: '포트폴리오', to: '/portfolio/create' },
    { id: 4, label: '마이페이지', to: '/mypage' },
  ];

  if (
    pathname === '/login' ||
    pathname === '/signup' ||
    pathname.startsWith('/Activity') ||
    (pathname.startsWith(`/portfolio`) && pathname !== '/portfolio/create') ||
    level === 'edit'
  )
    return null;

  return (
    <N.Navbar>
      <N.Logo onClick={() => navigate('/')}>Portpolis</N.Logo>

      <N.List>
        {LINKS.map((link) => (
          <N.Menu key={link.id} to={link.to} className="b1">
            <li>{link.label}</li>
          </N.Menu>
        ))}
      </N.List>

      <N.Empty />
    </N.Navbar>
  );
};

export default Navbar;
