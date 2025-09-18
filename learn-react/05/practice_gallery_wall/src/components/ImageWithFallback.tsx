import { useState } from "react";
import { twMerge } from "tailwind-merge";

type ImageWithFallbak = React.ComponentPropsWithoutRef<"img">;

const ERROR_IMG_SRC =
	"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

export default function ImageWithFallback(props: ImageWithFallbak) {
	const { src, alt, className, ...rest } = props;

	// true 에러 / false 에러x
	const [error, setError] = useState(false);

	const handleError = () => {
		setError(true);
	};

	return (
		<>
			{error ? (
				<>
					{/* 에러 났을 때 */}
					<div
						className={twMerge(
							`inline-block bg-gray-100 text-center align-middle`,
							className ?? "",
						)}
					>
						<div className="flex items-center justify-center w-full h-full">
							<img
								src={ERROR_IMG_SRC}
								alt={alt}
								{...rest}
								data-original-url={src}
							/>
						</div>
					</div>
				</>
			) : (
				<>
					{/* 에러 안 났을 때 */}
					<img
						src={src}
						alt={alt}
						className={className}
						{...rest}
						onError={handleError}
					/>
				</>
			)}
		</>
	);
}
