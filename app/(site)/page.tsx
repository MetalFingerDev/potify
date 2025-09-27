"use client";

import Header from "@/components/Header";
import { Authenticated, Unauthenticated } from "convex/react";

export default function Home() {
	return (
		<div className='bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto'>
			<Header />
			<Authenticated>content</Authenticated>
			<Unauthenticated>cumtent</Unauthenticated>
		</div>
	);
}
