// 타입 추론은 실행 컨텍스트 내에서만 이루어짐
{
	let x: number | string = 10;
	x.toFixed(2);

	function printValue(x: number | string) {
		// console.log(x.toFixed(2)); // 실행컨텍스트가 아니라 함수 컨텏스트로 이동해서 추론이 불가
    // 그래서 타입가드를 사용해야한ㅁ
    if(typeof x === "number") console.log(x.toFixed(30))
    else console.log(x.toLowerCase())
	}

	printValue(10);
	printValue(10);
}
