{
	// any - 아무 값이나 대입하여 사용할 수 있어 타입 검사를 우회하는 특수한 타입
	// TODO: 타입 교체 <- 이런식으로 작성해놓음

	// unknown - 알 수 없는 타입 (안전한 any, 유연한 any)
	let x: unknown;
	x = 10.12;

	// unknown은 직접적으로 값을 사용할 수 없고, 타입가드를 통해 타입을 검증하는 절차가 필요함
	if (typeof x === "number") {
		console.log(x.toFixed(2));
	}

	// any말고 unknown을 쓸것
}
{
	// 타입 단언
	// 개발자가 타입스크립트 컴파일러보다 더?? 잘 아고 있을 때 사용;;
	// 타입을 내가 정의하겠따. 나를 믿어라 요런 느낌

	let x: unknown;
	x = 10.12;

	// as, <>를 사용하는 방법이 있음
	(x as number).toFixed(4); // 잘씀 <<
	(<number>x).toFixed(4); // 일반적으로 리액트에서 사용하지 않는 방법. JSX문법과 충돌

	// 이렇게 하면 장점
	// 타입을 내가 원하는대로 지정할 수 있음
	// 단점은? 그 책임은 개발자가 가져감

	// let y: string;
	let y: unknown;
	y = "A";
	(y as { name: string }).name;

	// const el = document.querySelector("#user"); // 이렇게만 하면 null일 수도 있어서
	const el = document.querySelector("#user") as Element;
	el.addEventListener("click", function () {});
	// 이런식으로 할수도 이씀
	// 근데 자동완성이 ?.로 해주긴함
}
