// 1. 자바스크립트
// 1.1 자바스크립트 자체적으로 내장되어있는 API
// 1.1.1 object(객체)
// 1.1.1.1 String
// 1.1.1.2 Function
// 1.1.1.3 Number
// ...

// 1.2 브라우저에서 제공해주는 API (fetch, DOM과 관련된 API...)
// 1.2.1 window(객체)
// 1.2.1.1 BOM (Browser Object Models)
// 1.2.1.1.1 navigator
// 1.2.1.1.2 screen
// 1.2.1.1.3 location
// 1.2.1.1.4 history
// 1.2.1.1.5 document => DOM (document object model) 이라고 부름

// 원래는 BOM 배우는데 2일갖고 택도 없는데 react, vue, next.js 배우면 이미 내장되어있어서 필요가 엄슴

// 1.3 BOM
// 1.3.1 window
// 1.3.1.1. alert(message)
window.alert("흠냐링");

// 1.3.1.2 confirm(message)
const confirms = window.confirm("예아니오 받기"); // 얘는 값이 받아짐.
// 브라우저 자체 알럿창이라 디자인이 불가능. 강사님은 별로 안쓴다캄

// 1.3.1.3 prompt
const prompt = window.prompt("너의 이름은?"); // 사용자의 응답을 받아 값을 변수에 저장이 가능함
// 그런데? 강사님은 10년동안 일하면서 한번도 쓴적이 없음. 쓸모가 없어요

// 1.3.1.4 setTimeout  + clearTimeout
// 1회성으로 동작하는 코드를 작성할 때 사용
const timeout = window.setTimeout(() => {
	console.log("setTimeout");
}, 1000);
clearTimeout(timeout); // 메모리 깔끔하게 정리하는걸 권장하는 패턴임

// 1.3.1.5 setInterval  + clearInterval
// 특정 ms마다 일정한 코드를 반복하고 싶을 때 사용
let count = 0;
const interval = window.setInterval(() => {
	console.log(count++);
	if (count === 5) clearInterval(interval); // 특정 조건에서 멈추게 하기
}, 1000);

// window. 안붙여도 잘~실행됨

// 1.3.2 navigator
// console.log(window.navigator) // window. 생략해도 댐
console.log(navigator)
// 이걸 통해서 접속한 브라우저 정보 수집 가능

// 1.3.3 screen
// 1.3.3.1 width, height, availWidth, availHeight
// availWidth, availHeight 사용가능한 화면의 너비 / 높이

// 1.3.4 location
// host, hostname, href, origin, pathname, port, protocol 등 내용을 가져올 수 있음
// console.log(window.location);
// window.location.href = "https://sucoding.kr";
// window.location.assign("https://www.sucoding.kr");
// window.location.reload();