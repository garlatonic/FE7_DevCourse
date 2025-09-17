// 관례... 컴포넌트명 + Props

// interface UserProps {
// 	userObj: { name: string; age: number; gender: string };
// 	clickHandler: () => void;
// }

export default function User(props: UserProps) {
	const {
		userObj: { name, age, gender },
		clickHandler,
	} = props;

	return (
		<>
			<h1>{name}</h1>
			<h1>{age}</h1>
			<h1>{gender}</h1>
			<button onClick={clickHandler}>클릭</button>
		</>
	);
}
