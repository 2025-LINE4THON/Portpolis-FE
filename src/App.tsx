import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/pageRoutes';
import { Global } from '@emotion/react';
import global from './styles/global';
import { PortfolioProvider } from './context/PortfolioProvider';

function App() {
  return (
    <PortfolioProvider>
      <Global styles={global} />
      <RouterProvider router={router}></RouterProvider>
    </PortfolioProvider>
  );
}

export default App;
