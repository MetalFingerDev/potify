import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
	return (
		<div>
			<div className='flex justify-end'>
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
			</div>
		</div>
	);
}
