import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import { HomeLayout } from '@/layouts/HomeLayout';
import { lazyRoutes } from './routes';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <lazyRoutes.HomePage /> },
      {
        path: 'activity',
        element: <lazyRoutes.ActivityCreatePage />,
      },
      {
        path: 'activity/:id',
        element: <lazyRoutes.ActivityDetailPage />,
      },
      {
        path: 'career',
        element: <lazyRoutes.CareerPage />,
      },
      {
        path: 'list',
        element: <lazyRoutes.ListPage />,
      },
      {
        path: 'login',
        element: <lazyRoutes.LoginPage />,
      },
      {
        path: 'mypage',
        element: <lazyRoutes.MyPage />,
      },
      {
        path: 'portfolio/create',
        element: <lazyRoutes.PortfolioCreatePage />,
      },
      {
        path: 'portfolio/:id',
        element: <lazyRoutes.PortfolioPage />,
      },
      {
        path: 'signup',
        element: <lazyRoutes.SignupPage />,
      },
      {
        path: 'marketplace',
        element: <lazyRoutes.MarketPage />,
      }
    ],
  },
];

export const router = createBrowserRouter([...routes]);
