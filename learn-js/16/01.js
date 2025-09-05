// 비동기 흐름을 제어하기 위해서 사용
// 1. 콜백 함수
// 2. Promise    상태(pending => fulfiled, rejected)
// 3. async, await

// 자바스크립트는 동기로 실행. 코드를 한번에, 한줄씩 순차적으로
// 비동기를 처리할 수 있는 방법을 제공 (비동기 -> 코드의 실행을 기다리지 않는다)

const promise = new Promise((resolve, rejcet) => resolve("성공")); // 프로미스도 표준내장객체.

/*
마우스 슥 올렸을 때 나타나는 문법은 타입스크립트 문법인데, 어떤 내용으로 흘러가는지 보면됨

var Promise: PromiseConstructor
new <any>(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void) => Promise<any>
*/


// new Promise((resolve, reject) => resolve("성공")) //
//   .then(console.log)
//   .catch(console.log);

// Promise.resolve("성공!").then(console.log);

// await
// A, B, C -> 3s
// 병렬처리 -> 함수를 먼저 호출 await, Promise.all, race, allSettled
async function delay(ms) {
  // return new Promise((resolve) => resolve(ms));
  return ms;
}

delay(2000) //
  .then(console.log);