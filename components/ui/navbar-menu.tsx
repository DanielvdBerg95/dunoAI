import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { NavBarData } from '../shared/NavBarData';

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  icon,
  children,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  icon: string; // Use string for icon path
  children?: React.ReactNode;
}) => {
  const isActive = active === item;

  return (
    <div
      onMouseEnter={() => setActive(item)}
      onMouseLeave={() => setActive(null)}
      className="relative"
    >
      <motion.div
        transition={{ duration: 0.3 }}
        className={`cursor-pointer ${
          isActive ? 'text-white' : 'text-white hover:text-blue-700'
        }`}
      >
        <img
          src={icon}
          alt={item}
          className={`w-6 h-6 ${
            isActive ? 'text-white' : 'text-white hover:text-blue-700'
          }`}
        />
      </motion.div>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 80 }} // Adjust y position to move subNav above
          animate={{ opacity: 1, scale: 1, y: 10 }}
          transition={transition}
          className="absolute bottom-[calc(100%_+_0.50rem)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-4"

          style={{ zIndex: 999 }} // Ensure subNav appears above other content
        >
          {isActive && (
            <motion.div
              transition={transition}
              layoutId="active"
              className="backdrop-blur-sm bg-blue-950 border-blue-700 rounded-2xl overflow-hidden border shadow-xl"
            >
              <motion.div layout className="w-max h-full p-4">
                {children}
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-transparent lg:gap-10 shadow-input flex justify-around space-x-4 px-8 py-5"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
    
      <div>
        <h4 className="p-14-regular font-bold mb-1 text-white">{title}</h4>
        <p className=" text-sm max-w-[10rem] text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link {...rest} className="text-neutral-200 ">
      {children}
    </Link>
  );
};

const BottomNavBar = () => {
  const [active, setActive] = useState<string | null>(null);

  const handleSetActive = (item: string | null) => {
    setActive(item === active ? null : item);
  };

  return (
    <Menu setActive={setActive}>
      {NavBarData.map((navItem) => (
        <MenuItem
          key={navItem.title}
          setActive={handleSetActive}
          active={active}
          item={navItem.title}
          icon={navItem.icon} // Pass the icon path
        >
          {navItem.subNav.map((subNavItem) => (
            <ProductItem
              key={subNavItem.label}
              title={subNavItem.label}
              description=""
              href={subNavItem.route}
              src={subNavItem.icon}
            />
          ))}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default BottomNavBar;
