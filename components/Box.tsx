import { twMerge } from "tailwind-merge";

interface BoxProps {
	children: React.ReactNode;
	className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
	return (
		<div
			className={twMerge(
				`	flex
					flex-col
					gap-y-4
					px-5 
					py-4
					bg-neutral-900
          rounded-lg
          h-fit
          w-full
        `,
				className
			)}>
			{children}
		</div>
	);
};

export default Box;
