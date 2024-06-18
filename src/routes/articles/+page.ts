import type { Article } from "$lib";

export async function load({ fetch }) {
	const response = await fetch("/api/articles");
	const articles: Article[] = await response.json();

	return { articles };
}
