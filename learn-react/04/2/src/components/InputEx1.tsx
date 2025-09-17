import { twMerge } from "tailwind-merge";

type InputProps = React.ComponentPropsWithoutRef<"input">;

export default function InputEx1(props: InputProps) {
	const { id, type, ...rest } = props;
	return (
		<>
			<input
				id={id}
				type={type}
				placeholder="Enter Todo List"
				className={twMerge(`input inter placeholder:text-[#acacac]`)}
				{...rest}
			/>
		</>
	);
}
