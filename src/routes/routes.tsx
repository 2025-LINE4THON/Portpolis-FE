import MarketPage from '@/pages/MarketPage/MarketPage';
import React from 'react';

export const lazyRoutes = {
  ActivityCreatePage: React.lazy(() => import('../pages/ActivityCreatePage/ActivityCreatePage')),
  ActivityDetailPage: React.lazy(() => import('../pages/ActivityDetailPage/ActivityDetailPage')),
  CareerPage: React.lazy(() => import('../pages/CareerPage/CareerPage')),
  HomePage: React.lazy(() => import('../pages/HomePage/HomePage')),
  ListPage: React.lazy(() => import('../pages/ListPage/ListPage')),
  LoginPage: React.lazy(() => import('../pages/LoginPage/LoginPage')),
  MyPage: React.lazy(() => import('../pages/MyPage/MyPage')),
  PortfolioCreatePage: React.lazy(() => import('../pages/PortfolioCreatePage/PortfolioCreatePage')),
  PortfolioPage: React.lazy(() => import('../pages/PortfolioPage/PortfolioPage')),
  SignupPage: React.lazy(() => import('../pages/SignupPage/SignupPage')),
  MarketPage: React.lazy(() => import('../pages/MarketPage/MarketPage')),
};
