import React from "react";
import Form from "next/form";
import SearchResetForm from "./SearchResetForm";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

const SearchForm = ({ search }: { search?: string }) => {
	return (
		<Form action="/" scroll={false} className="search-form">
			<input
				name="search"
				defaultValue={search}
				placeholder="Search Startup"
				className="search-input"
			/>
			<div className="flex gap-2">
				{search && <SearchResetForm />}
				<Button type="submit" className="search-btn text-white">
					<Search className="size-5" />
				</Button>
			</div>
		</Form>
	);
};

export default SearchForm;
