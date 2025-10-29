import { notFound } from "next/navigation";

export default async function TranslatgeDetailPage({
	params,
}: {
	params: Promise<{ lang: string }>;
}) {
	const { lang } = await params;
	if (lang === "fr") notFound();
	return (
		<>
			<h1>Page Component : {lang}</h1>
		</>
	);
}
