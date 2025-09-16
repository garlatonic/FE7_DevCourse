// export default function User(props: {
// 	name: string;
// 	age: number;
// 	address?: { zipcode: number; detail: string };
// }) {
// 	return (
// 		<>
// 			<h1>{props.name}</h1>
// 			<h2>{props.age}</h2>
// 			<h3>{props.address?.zipcode}</h3>
// 			<h3>{props.address?.detail}</h3>
// 		</>
// 	);
// }

export default function User({
	name,
	age,
	address,
}: {
	name: string;
	age: number;
	address?: { zipcode: number; detail: string };
}) {
	return (
		<>
			<h1>{name}</h1>
			<h2>{age}</h2>
			<h3>{address?.zipcode}</h3>
			<h3>{address?.detail}</h3>
		</>
	);
}
