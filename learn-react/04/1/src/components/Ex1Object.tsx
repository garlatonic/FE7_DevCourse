export default function Ex1Object({
	object,
}: {
	object: { name: string; age: number };
}) {
	const { name, age } = object;
	return (
		<>
			<h1>{name}</h1>
			<h1>{age}</h1>
		</>
	);
}
