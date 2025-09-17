export default function InputEx1({
	id,
	type,
	className,
}: {
	id: string;
	type: string;
	className: string;
}) {
	return (
		<>
			<input
				id={id}
				type={type}
				placeholder="Enter Todo List"
				className={className}
			/>
		</>
	);
}
