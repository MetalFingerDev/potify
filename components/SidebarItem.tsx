import { IconType } from "react-icons";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
	icon: IconType;
	label: string;
	activate?: boolean;
	href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
	icon: Icon,
	label,
	active,
	href,
}) => {
	return (
		<Link
			href={href}
			className={twMerge(
				`
          flex
          flex-row
          h-auto
          items-center
        `,
				active && "text-green-500"
			)}>
			<Icon size={26} />
			<p className='truncate w-full'>{label}</p>
		</Link>
	);
};

export default SidebarItem;
