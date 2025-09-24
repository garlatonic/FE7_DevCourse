// 화면 렌더링과 관련없는 작업은 사이드 이펙트라고 부름
// 사이드 이펙트는 useEffect 훅을 사용해서 처리함

import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Fetch() {
	// 리액트 컴포넌트에서 데이터 패칭 받기
	// 3개의 상태값이 필요
	// const [posts, setPosts] = useState<Post[]>([]);
	// const [isLoading, setIsLoading] = useState(true);
	// const [error, setError] = useState("");

	// useEffect(() => {
	// 	// 클린업 함수를 리턴할 수 있게끔 설계되어있어 useEffect자체에 맘대로 async 붙일 수 없음.
	// 	// 별도의 함수를 만들어서 async 해야함
	// 	const fetchData = async () => {
	// 		const res = await fetch("http://localhost:3001/posts");
	// 		try {
	// 			setIsLoading(true);
	// 			if (!res.ok) throw new Error(res.statusText);
	// 			const data = await res.json();
	// 			setPosts(data);
	// 		} catch (error) {
	// 			// setError(error instanceof Error ? error.message : "unknown error");
	// 			setError((error instanceof Error && error.message) || "unknown error");
	// 		} finally {
	// 			setIsLoading(false);
	// 		}
	// 	};
	// 	fetchData();
	// 	return () => {};
	// }, []);

	const {
		data: posts,
		isLoading,
		error,
	} = useFetch<Post[]>("http://localhost:3001/posts");
	const {
		data: comments,
		isLoading: isLoadingComments,
		error: errorComments,
	} = useFetch<Comment[]>("http://localhost:3001/comments");

	if (isLoading || isLoadingComments) return <p>Loading...</p>;
	if (error || errorComments) return <p>{error}</p>;

	return (
		<>
			<pre>{JSON.stringify(posts, null, 2)}</pre>
			<pre>{JSON.stringify(comments, null, 2)}</pre>
			{/* <ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul> */}
		</>
	);
}
