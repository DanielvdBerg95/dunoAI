// Layout.tsx
'use client'
import React from 'react';
import { Providers } from '../providers';
import MobileAppBar from '@/components/shared/MobileAppBar';
import NewSidebar from '@/components/shared/NewSideBar';
import BottomNavBar from '@/components/ui/navbar-menu';

// Adjust the path as per your structure

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <main className='root'>
        
        
        
     
          {children}
       
        

        
        
        
        <div className="fixed bottom-0 w-screen left-0 right-0 pb-10 lg:pl-10 lg:pr-10 pl-2 pr-2 flex lg:justify-around justify-evenly items-center shadow-md">
  <BottomNavBar />
</div>
        
        
      </main>
    </Providers>
  );
};

export default Layout;
