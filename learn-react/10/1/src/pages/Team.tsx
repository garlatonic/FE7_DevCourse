import { useParams, useSearchParams } from "react-router";

export default function Team() {
	const params = useParams();
	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<>
			<h1>Team Component</h1>
			<h2>TeamID:{params.id}</h2>
			<h2>GroupID:{params.groupId}</h2>
			<h2>searchParam:{searchParams.get("lang")}</h2>
		</>
	);
}
