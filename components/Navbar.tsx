import Link from "next/link";
import Image from "next/image";
import React from "react";
import { auth, signIn, signOut } from "@/auth";
import { Button } from "./ui/button";

const Navbar = async () => {
	const session = await auth();

	return (
		<header className="px-5 py-3 bg-white shadow-sm font-work-sans ">
			<nav className="flex justify-between items-center ">
				<Link href="/">
					<Image src="/logo.png" alt="Logo" width={144} height={30}></Image>
				</Link>
				<div className="flex text-black items-center gap-5">
					{session && session?.user ? (
						<>
							<Link href="/startup/create">
								<span>Create</span>
							</Link>

							<Image
								src={session?.user?.image ?? ""}
								alt="profile"
								width={24}
								height={24}
								title={session?.user?.name ?? ""}
							></Image>
							<form
								action={async () => {
									"use server";
									await signOut({ redirectTo: "/" });
								}}
							>
								<Button type="submit" variant="secondary">
									logout
								</Button>
							</form>
						</>
					) : (
						<form
							action={async () => {
								"use server";
								await signIn("github");
							}}
						>
							<Button type="submit">login</Button>
						</form>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
