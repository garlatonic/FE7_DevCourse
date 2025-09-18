// 요소를 반복 렌더링하려면
// 그 요소를 가공해서 가공된 값이 포함된 배열로 만들어주기
// 배열을 표현식으로 출력하기

import { useState } from "react";
import UserCard from "./components/UserCard";

export default function App() {
	// const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);
	// const handleItemAdd = () => {
	// 	setItems((items) => [...items, "New Item"]);
	// };
	const users: {
		id: number;
		name: string;
		age: number;
	}[] = [
		{ id: 1, name: "박상아", age: 30 },
		{ id: 2, name: "tkddk", age: 30 },
	];

	return (
		<>
			{/* 배열을 가공할 일이 없거나, 배열의 뒤쪽으로만 새로운 요소가 추가될 경우 -> index key값으로 써도 됨 */}
			{/* 배열글 가공할 일이 있는데 그 배열의 앞에 새로운 요소를 추가하거나, 배열 요소와 요소 사이에 새로운 요소를 추가할 경우 -> index key값으로 쓰면 안됨 */}
			{/* {items.map((item, index) => (
				<input key={index} placeholder={item} style={{ display: "block" }} />
			))}
			<button onClick={handleItemAdd}>추가</button> */}
			<ul>
				{users.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
			</ul>
		</>
	);
}
