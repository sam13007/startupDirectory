import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

import { Fragment } from "react";
import { client } from "@/sanity/lib/client";
import { STARTUP_QUERIES } from "@/sanity/lib/queries";
import { Author, Startup } from "@/sanity/types";

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ search?: string }>;
}) {
	const query = (await searchParams).search;

	const posts = await client.fetch(STARTUP_QUERIES);

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
						posts.map((post: StartupTypeCard) => {
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
