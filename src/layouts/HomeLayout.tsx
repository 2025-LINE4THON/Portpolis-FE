import Navbar from '@/components/Navbar/Navbar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import * as C from '@styles/common';

export const HomeLayout = () => {
  return (
    <div>
      <Navbar />

      <C.Page>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </C.Page>
    </div>
  );
};
