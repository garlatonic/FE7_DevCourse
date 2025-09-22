import React, { useState } from "react";
import C from "./C";

export default React.memo(function B() {
	const [count, setCount] = useState(0);
	console.log("B Rerendring");
	return (
		<>
			<h1>B Count: {count}</h1>
			<button onClick={() => setCount((count) => count + 1)}>증가</button>
			<C />
		</>
	);
});
