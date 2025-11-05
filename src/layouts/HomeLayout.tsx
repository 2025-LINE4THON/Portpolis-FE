import Navbar from '@/components/Navbar/Navbar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const HomeLayout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
