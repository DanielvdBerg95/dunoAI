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
    <header className='hidden lg:fixed lg:flex lg:flex-row lg:h-20 lg:top-0 lg:right-0 lg:py-5 lg:px-5 lg:w-full lg:justify-between'>
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



    </header>
  );
}

export default MobileAppBar;
