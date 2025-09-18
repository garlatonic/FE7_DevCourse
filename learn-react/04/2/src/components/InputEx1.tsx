import { twMerge } from "tailwind-merge";

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
	type: "text" | "password" | "email" | "number" | "date";
};

export default function InputEx1(props: InputProps) {
	const { ...rest } = props;
	return (
		<>
			<input
				className={twMerge(`input inter placeholder:text-[#acacac]`)}
				{...rest}
			/>
		</>
	);
}
