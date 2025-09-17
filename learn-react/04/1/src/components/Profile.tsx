export default function Profile({ name, age }: { name: string; age: number }) {
	return (
		<>
			<h1>{name}</h1>
			<h1>{age}</h1>
		</>
	);
}
