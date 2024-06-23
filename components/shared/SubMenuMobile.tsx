import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import clsx from 'clsx';
import Image from 'next/image';

interface SubMenuMobileItem {
  label: string;
  route: string;
}

interface SubMenuMobileProps {
  subNav: SubMenuMobileItem[];
  isOpen: boolean;
  activeRoute: string;
  onSubItemClick: (route: string) => void;
}

const SubMenuMobileContainer = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: relative;
`;

const SubMenuMobileItemStyled = styled.div`
  padding: 10px 20px;
  cursor: pointer;
`;

const SubMenuMobile: React.FC<SubMenuMobileProps> = ({ subNav, isOpen, activeRoute, onSubItemClick }) => {
  const router = useRouter(); // Ensure this is within a client-side rendered component

  const handleSubItemClick = (route: string) => {
    onSubItemClick(route); // Call onSubItemClick prop with the route
    router.push(route); // Use router.push to navigate to the selected route
  };

  return (
    <SubMenuMobileContainer className="mobile-nav_element p-12-medium flex gap-4 group py-4 px-4 text-white font-bold" isOpen={isOpen}>
      {subNav.map((subItem: SubMenuMobileItem, index: number) => (
        <SubMenuMobileItemStyled
          key={index}
          onClick={() => handleSubItemClick(subItem.route)} // Handle navigation on click
          className={clsx('pl-4 pr-4 group mobile-nav_element_sub ', {
            'text-white font-bold mobile-nav_element_selected': subItem.route === activeRoute,
            'text-gray-100 font-bold ': subItem.route !== activeRoute
          })}
        >
          {subItem.label}
        </SubMenuMobileItemStyled>
      ))}
    </SubMenuMobileContainer>
  );
};

export default SubMenuMobile;