"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

const Library = () => {
	const onClick = () => {};
	return (
		<div className='flex flex-col'>
			<div className='flex items-center justify-between'>
				<div className='inline-flex items-center gap-x-2'>
					<TbPlaylist className='text-neutral-400' size={26} />
					<p className='text-neutral-400 font-medium text-md'>Library</p>
				</div>
				<AiOutlinePlus
					onClick={onClick}
					size={20}
					className='
						text-neutral-400
						cursor-pointer
						hover:text-white
						transition
						'
				/>
			</div>
			<div>songs</div>
		</div>
	);
};

export default Library;
