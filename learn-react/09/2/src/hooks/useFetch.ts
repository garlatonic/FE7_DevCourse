import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(url);
			try {
				setIsLoading(true);
				if (!res.ok) throw new Error(res.statusText);
				const data = await res.json();
				setData(data);
			} catch (error) {
				// setError(error instanceof Error ? error.message : "unknown error");
				setError((error instanceof Error && error.message) || "unknown error");
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
		return () => {};
	}, [url]);

	return { data, isLoading, error };
}
