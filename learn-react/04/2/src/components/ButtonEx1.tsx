import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export default function ButtonEx1(props: ButtonProps) {
	const { children, className = "", ...rest } = props;
	return (
		<>
			<button className={twMerge(`inter button`, className)} {...rest}>
				{children}
			</button>
		</>
	);
}
