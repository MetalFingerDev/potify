import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
	return (
		<header className='flex justify-end'>
			<SignedOut>
				<div className='flex gap-2'>
					<SignInButton />
				</div>
			</SignedOut>

			<SignedIn>
				<div className='flex gap-2'>
					<UserButton />
				</div>
			</SignedIn>
		</header>
	);
};

export default Header;
