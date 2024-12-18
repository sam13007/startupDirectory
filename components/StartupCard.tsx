/* eslint-disable @next/next/no-img-element */

import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { StartupTypeCard } from "@/app/(root)/page";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
	const {
		_createdAt,
		views,
		author,
		title,
		description,
		_id,
		image,
		category,
	} = post;
	return (
		<li className="startup-card group">
			<div className="flex-between">
				<p className="startup-card_date">{_createdAt}</p>
				<div className="flex gap-1.5">
					<EyeIcon className="size-6 text-primary" />
					<span className="text-16-medium">{views}</span>
				</div>
			</div>
			<div className="flex-between mt-5 gap-5">
				<div className="flex-1">
					<Link href={`/user/${author?._id}`}>
						<p className="text-16-medium line-clamp-1">{author?.name}</p>
					</Link>
					<Link href={`/startup/${_id}`}>
						<h3 className="text-26-semibold line-clamp-1">{title}</h3>
					</Link>
				</div>
				<Link href={`/user/${author?._id}`}>
					{" "}
					<Image
						src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg"
						alt="Placeholder"
						height={45}
						width={45}
						className="rounded-full"
					></Image>
				</Link>
			</div>

			<Link href={`/startup/${_id}`}>
				<p className="startup-card_desc ">{description}</p>
				<img src={image} alt={"image"} className="startup-card_img"></img>
			</Link>

			<div className="flex-between gap-3 mt-5">
				<Link href={`/?query=${category}`}>
					<p className="text-16-medium">{category}</p>
				</Link>
				<Button className="startup-card_btn" asChild>
					<Link href={`/startup/${_id}`}>Details</Link>
				</Button>
			</div>
		</li>
	);
};

export default StartupCard;
