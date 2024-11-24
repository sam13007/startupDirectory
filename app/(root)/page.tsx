import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { startupCardType } from "../types/StartCardType";
import { Fragment } from "react";

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ search?: string }>;
}) {
	const query = (await searchParams).search;

	const posts: startupCardType[] = [
		{
			_createdAt: new Date(),
			views: 55,
			author: { _id: 1, name: "Adrian" },
			_id: 1,
			description: "This is desc",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYWeNS1XIskFKdWbftUcBQO8vtvsicRg4qg&s",
			category: "Robots",
			title: "We Robots",
		},
	];

	return (
		<>
			<section className="pink_container">
				<h1 className="heading">
					Pitch Your Startup,
					<br /> Connect with Entrepreneurs
				</h1>
				<p className="sub-heading">
					Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
				</p>
				<SearchForm search={query} />
			</section>

			<section className="section_container">
				<p className="text-30-bold">
					{query ? `Search results for ${query}` : "All startups"}
				</p>

				<ul className="mt-7 card_grid">
					{posts.length > 0 ? (
						posts.map((post: startupCardType) => {
							return (
								<Fragment key={post._id}>
									<StartupCard post={post} />
								</Fragment>
							);
						})
					) : (
						<p className="no-result">No startups found</p>
					)}
				</ul>
			</section>
		</>
	);
}
