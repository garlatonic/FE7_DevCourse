export default function Ex1Array({ array }: { array: string[] }) {
	return (
		<ul>
			{array.map((ele, idx) => {
				return <li key={idx}>{ele}</li>;
			})}
		</ul>
	);
}
