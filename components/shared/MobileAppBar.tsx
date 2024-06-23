'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UserButton, useUser } from '@clerk/nextjs';
import { usePathname, useRouter } from 'next/navigation';

import { SidebarData } from './SideBarData';

import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import SubMenuMobile from './SubMenuMobile';
import { Icon } from '@radix-ui/react-select';

const MobileAppBar = () => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const router = useRouter();
  const { user } = useUser(); // Get the current user to check if the user is logged in

  const handleItemClick = (index: number) => {
    setActiveItem(activeItem === index ? null : index);
  };

  const handleSubItemClick = (route: string) => {
    // Handle sub-menu item click logic here (e.g., navigation)
    console.log('Sub-item clicked:', route);
    router.push(route); // Example: Use router.push for navigation
  };

  return (
    <header className='fixed flex flex-row h-20 top-0 right-0 py-5 px-5 w-full justify-between'>
      <Link href="/dashboard">
        <Image src="/duno_logo.png" width={50} height={50} alt="logo" />
      </Link>
      <div className='flex gap-5 flex-row max-w-80 min-w-24'>
        <div className="relative flex items-center max-w-80 min-w-24">
          <input
            type="search"
            placeholder="Search here..."
            className="bg-transparent border-white border-2 rounded-[25px] py-2 pl-10 pr-4 placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          <div className="absolute left-3">
            <Image src="/assets/icons/search_icon.svg" alt="search icon" width={20} height={20} />
          </div>
        </div>
        <div>
          

        </div>
        <div className='items-center pt-1'>
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>



      <nav className='flex gap-2 items-center lg:hidden'>
        {/* Example using Sheet and SubMenu */}
        <Sheet>
          <SheetTrigger className='text-white'>
            <button className='shimmer-button h-8 w-8 text-white'>
              <Image src="/assets/icons/icons/menu.svg" alt="menu" width={18} height={18} style={{ filter: 'invert(50%)' }} className='cursor-pointer text-white' />
            </button>
          </SheetTrigger>
          <SheetContent className='gradient-background-b sheet-content sm:w-64'>
            <Image src="/duno_text_logo.png" alt="logo" width={190} height={80} />
            <ul className='header-nav_elements'>
              {SidebarData.map((item, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`flex items-center p-14-medium px-4 py-2 cursor-pointer ${activeItem === index ? 'text-white mobile-nav_element' : 'text-gray-200'}`}
                    onClick={() => handleItemClick(index)}
                  >
                    <Image src={item.icon} alt="logo" width={28} height={28} />
                    <span className="ml-2">{item.title}</span>
                  </div>
                  {activeItem === index && (
                    <SubMenuMobile
                      subNav={item.subNav}
                      isOpen={activeItem === index}
                      activeRoute={pathname} // Example: Pass activeRoute as needed
                      onSubItemClick={handleSubItemClick} // Pass the function to handle sub-menu item clicks
                    />
                  )}
                </React.Fragment>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>

    </header>
  );
}

export default MobileAppBar;
