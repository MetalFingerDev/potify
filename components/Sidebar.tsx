"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";

import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface SidebarProps {
	children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
	const pathname = usePathname();

	const routes = useMemo(
		() => [
			{
				icon: HiHome,
				label: "Home",
				active: pathname !== "/search",
				href: "/",
			},
			{
				icon: BiSearch,
				label: "Search",
				active: pathname === "/search",
				href: "/search",
			},
		],
		[pathname]
	);

	return (
		<main>
			<nav className='hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2'>
				<Box>
					{routes.map((item) => (
						<SidebarItem key={item.label} {...item} />
					))}
				</Box>
				<Box className='overflow-y-auto flex-1'>
					<Library />
				</Box>
			</nav>
			<div className='flex-1 overflow-y-auto p-2'>{children}</div>
		</main>
	);
};

export default Sidebar;
