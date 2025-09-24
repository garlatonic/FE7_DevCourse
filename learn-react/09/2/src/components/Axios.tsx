import useAxios from "../hooks/useAxios";

export default function Axios() {
	const {
		data: posts,
		isLoading,
		error,
	} = useAxios("/posts");

	if (isLoading) return <p>...Loading...</p>;
	if (error) return <p>{error}</p>;
	return (
		<>
			<pre>{JSON.stringify(posts, null, 2)}</pre>
		</>
	);
}
