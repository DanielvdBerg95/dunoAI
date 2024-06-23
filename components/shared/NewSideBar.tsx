'use client'
import React, { useState } from 'react';
import styled from 'styled-components';
import { SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { SidebarData } from './SideBarData';
import SubMenu from './SubMenu';
import { usePathname } from 'next/navigation'; // Import usePathname for activeRoute

const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const NewSidebar = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [activeSubRoute, setActiveSubRoute] = useState<string>(''); // State to track active sub-menu route
  const pathname = usePathname(); // Use usePathname for activeRoute

  const handleItemClick = (index: number, route: string) => {
    setActiveItem(activeItem === index ? null : index);
    setActiveSubRoute(''); // Clear active sub-menu route when main menu item is clicked
  };

  const handleSubItemClick = (route: string) => {
    setActiveSubRoute(route); // Set active sub-menu route
  };

  return (
    <SignedIn>
      <aside className="sidebar fixed">
        <div className="flex flex-col gap-4 pt-20 h-screen">
          <SidebarNav>
            <SidebarWrap>
              {SidebarData.map((item, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`flex items-center p-14-bold px-4 py-2 font-sans cursor-pointer ${activeItem === index || activeSubRoute === item.route ? 'text-white bg-blue-950' : 'text-gray-200'}`}
                    onClick={() => handleItemClick(index, item.route)}
                  >
                    <Image 
                      src={item.icon}
                      alt="logo"
                      width={28}
                      height={28}
                    />
                    <span className="ml-2 font-bold">{item.title}</span> 
                  </div>
                  {activeItem === index && (
                    <SubMenu
                      subNav={item.subNav}
                      isOpen={true}
                      activeRoute={pathname} // Pass activeRoute as pathname
                      onSubItemClick={handleSubItemClick}
                    />
                  )}
                </React.Fragment>
              ))}
            </SidebarWrap>
          </SidebarNav>
          
        </div>
      </aside>
    </SignedIn>
  );
};

export default NewSidebar;
