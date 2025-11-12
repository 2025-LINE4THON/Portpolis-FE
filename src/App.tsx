import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/pageRoutes';
import { Global } from '@emotion/react';
import global from './styles/global';
import { PortfolioProvider } from './context/PortfolioProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PortfolioProvider>
        <Global styles={global} />
        <RouterProvider router={router}></RouterProvider>
      </PortfolioProvider>
    </QueryClientProvider>
  );
}

export default App;
