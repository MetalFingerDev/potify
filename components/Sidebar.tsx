

"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";

import Box from "./Box";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
  children
}) => {
  const pathname = usePathname();

  const routes = useMemo(() => [
    {
      icon: HiHome,
      label:'Home',
      active: pathname !== '/search',
      href: '/',
    },
    {
      icon: BiSearch,
      label: 'Search',
      active: pathname === '/search',
      href: '/search',
    }
  ], [pathname]);

  return (
    <div >
      <Box>
        <div >
          {routes.map((item) => (
            <SidebarItem
              key={item.label}
              {...item}/>
          ))}
        </div>
      </Box>
    </div>
  );
};
  
export default Sidebar;
