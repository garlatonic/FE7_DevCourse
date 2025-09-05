/* 

타입스크립트란??
자바스크립트에 타입(Type)을 추가한 언어
* 타입(type) : 데이터의 종류
단순히 기존에 존재하던 자바스크립트에 타입을 추가한 확장문법의 언어

타입스크립트는 자바스크립트의 슈퍼셋 (superset)
* superset? : 어떤 집합이나 시스템이 다른 집합이나 시스템을 모두 포함하면서도 추가적인 요소를 더 가지고 있는 것을 말함.

- 마이크로 소프트사가 개발
- 자바스크립트보다 좀 더 정확하고 안정적인 코드를 작성 가능함.
- 자바스크립트는 굉장히 유연한 언어 (동적 타입)
예시로 let num = 10; 이라고 하면 num에 숫자형 자료타입으로 알아서 기억됨
- 타입스크립트는 자바스크립트에 타입을 추가함

최신 tsconfig.json 설정을 사용할 경우
ts -> js 모듈로 변환이 됨
<script module="module" src="..."></script>

최신 설정을 바꾸는 방법
isolatedModules -> false
moduleDetection -> "auto"
<script defer src="..."></script>

5.8버전의 추천 설정을 사용하기 (강의노트 참고)
<script defer src="..."></script>

*/