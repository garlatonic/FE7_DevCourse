import axios from "axios";
import { useEffect, useState } from "react";

export default function useAxios<T>(url: string) {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				const { data } = await axios.get(url);
				setData(data);
			} catch (error) {
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
