export default function UserCard({
	user,
}: {
	user: { name: string; age: number };
}) {
	return (
		<>
			<li>
				{user.name} / {user.age}
			</li>
		</>
	);
}
