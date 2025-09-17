import type React from "react";
import check from "../assets/check.svg";

export default function CheckEx1({
	id,
	message,
	className,
}: {
	id: string;
	message: string;
	className: string;
}) {
	return (
		<div className={className}>
			<input
				id={id}
				type="checkbox"
				className={`w-5 h-5 appearance-none bg-gray rounded-xs checked:bg-[url:${check}]`}
			/>
			<label htmlFor={id} className="text-white font-medium ">
				{message}
			</label>
		</div>
	);
}
