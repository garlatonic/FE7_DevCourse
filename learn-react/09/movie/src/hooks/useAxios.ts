import axios from "axios";
import { useEffect, useState } from "react";

const ACCESS_TOKEN =
	"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGVmZWFjYmEwNmEyY2MzZTMyNWY0ZjU3Zjg5YjY1MiIsIm5iZiI6MTc1ODY5ODM2MC4yMDUsInN1YiI6IjY4ZDM5Yjc4YjI1OTZkOTBkNjBlM2FjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TDZ25tc1YnMrOhYlFNXtoRYqLTO95ktn5pZowkkQdQA";

const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: ACCESS_TOKEN,
	},
};

export default function useAxios(url: string) {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				const { data } = await axios.get(url, options);
				setData(data.results);
			} catch (e) {
				setError((e instanceof Error && e.message) || "unknown error");
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [url]);

	return { data, isLoading, error };
}
