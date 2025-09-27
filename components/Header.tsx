"use client";

import { useRouter } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";

const Header = () => {
	const router = useRouter();
	return (
		<header className='flex p-4'>
			<div className='hidden md:flex gap-x-2 items-center'>
				<button
					onClick={() => router.back()}
					className='rounded-full bg-black hover:opacity-75 transition'>
					<RxCaretLeft size={35} />
				</button>
				<button
					onClick={() => router.forward()}
					className='rounded-full bg-black hover:opacity-75 transition'>
					<RxCaretRight size={35} />
				</button>
			</div>

			<div className='flex md:hidden gap-x-2 items-center'>
				<button
					onClick={() => router.back()}
					className='rounded-full p-2 bg-black flex items-center justify-center hover:opacity-75'>
					<HiHome size={20} />
				</button>
				<button
					onClick={() => router.forward()}
					className='font-black rounded-full p-2 bg-black flex items-center justify-center hover:opacity-75'>
					<BiSearch size={20} />
				</button>
			</div>

			<div className='ml-auto'>
				<SignedOut>
					<SignInButton />
				</SignedOut>

				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
		</header>
	);
};

export default Header;
