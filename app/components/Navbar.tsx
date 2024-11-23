import Link from "next/link";
import Image from "next/image";
import React from "react";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
	const session = await auth();

	console.log(session, "session");
	return (
		<header className="px-5 py-3 bg-white shadow-sm font-work-sans ">
			<nav className="flex justify-between items-center text-black">
				<Link href="/">
					<Image src="/logo.png" alt="Logo" width={144} height={30}></Image>
				</Link>
				<div>
					{session && session?.user ? (
						<form
							action={async () => {
								"use server";
                                await signOut({redirectTo:"/"})
							}}
						>
							<button type="submit">logout</button>
						</form>
					) : (
						<form
							action={async () => {
								"use server";
								await signIn("github");
							}}
						>
							<button type="submit">login</button>
						</form>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
