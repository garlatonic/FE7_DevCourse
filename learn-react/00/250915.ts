// 컴포넌트 (Component)
// 1. UI를 구성하는 가장 작은 단위이자, 재사용 가능한 독립적인 블록을 의미

// 2. 컴포넌트를 정의하는 방법
// 2-1. 클래스형 컴포넌트(Class Component)
//      : React.Component를 상속받아 만들며, render() 메서드 안에 JSX 반환
// 2-2. 함수형 컴포넌트(Function Component)
//      : 함수로 정의하며, props를 받아 JSX 반환

// 3. 컴포넌트의 공통적인 특징
//    : JSX 문법*을 리턴
// *JSX 문법: Javascript + XML 확장 문법으로, 자바스크립트 안에서 HTML과 비슷한 구문을 쓸 수 있게 해주는 확장 문법

// 4. 클래스형 컴포넌트는 리액트 초창기부터 존재했던 방식
// 5. 함수형 컴포넌트는 리액트 0.14 버전(2015)
// 6. React 16.8 (2019년 2월) 리액트 훅(react hooks) 추가되며 클래스형에서만 사용가능했던게 함수형 컴포넌트에도 추가됨

// 7. JSX(syntatic sugar) // 문법적 설탕
//    기존 React.createElement() 의 설탕문법

// 8. JSX의 규칙
// 8-1. 반드시 하나의 루트태그를 가져야한다.
// 8-2. 여러줄을 리턴할 때는 소괄호를 작성한다. (prettier 설정으로 포맷팅되나 실무에서는 필수)
// 8-3. HTML4 <-> HTML5 <br>
//      HTML4 : <p></p>, <br /> -> 빈태그
//      HTML5 : <br>로 작성해도 되었음. 그런데? JSX에서는 이렇게 쓰면 오류남
//      >> 반드시 태그를 닫아줌
// 8-4. 태그의 속성은 카멜 케이스로 작성한다.
//      class -> className
//      for -> htmlFor
//      readonly -> readOnly
// 8-5. JSX는 표현식을 사용할 수 있다. {999*999}
// 8-6. {/* 주석 */} 작성방법
// 8-7. 인라인 스타일은 객체로 나타낸다.

// 스타일링
// 1. 전통적인 스타일링 방법
// 1-1. 인라인 스타일(inline style)
// 1-2. 외부 스타일(external style) , 글로벌 스타일(global style)
//      : 별도의 CSS 파일에 CSS 코드를 작성하고, 리액트 컴포넌트 파일과 연결해서 사용하는 방법
//      상위 컴포넌트에 적든 하위 컴포넌트에 적든 모든 곳에 연결이 된다
//      그래서 이것도 관례가 있다... 모든 외부 스타일은 main.tsx에 적는다

// 2. CSS Modules (*.module.css)
// 2-1. classnames
// 공통은 global로 하고 모듈에 필요한건 모듈스타일로 쓰기...
// 모듈로 쓸거면 tailwind, cssinjs 안씀
// 모듈css로 쓸 때는 classname/bind
// 외부스타일(글로벌)이랑 접목할 때는 classname

// 3. Tailwind CSS

// 4. CSS-IN-JS
