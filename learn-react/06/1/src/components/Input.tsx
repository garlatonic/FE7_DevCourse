import type { Dispatch, SetStateAction } from "react";

type InputProps = Omit<React.ComponentPropsWithRef<"input">, "value"> & {
	value: string;
	// setValue: Dispatch<SetStateAction<string>>;
	setValue: (value: string) => void;
};
export default function Input({ value, setValue, ref, ...rest }: InputProps) {
	return (
		<>
			<input
				{...rest}
				value={value}
				ref={ref}
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
		</>
	);
}
