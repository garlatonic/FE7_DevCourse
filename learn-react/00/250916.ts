/* 

1. 리액트의 스타일링 방법

1.1. 전통적인 스타일링 방법
1.1.1. 인라인 스타일
1.1.2. 외부 스타일 (글로벌 스타일)

1.2. CSS Module (*.module.css)
1.2.1. ClassNames 패키지
1.2.1.1. 'classnames', 'classnames/bind'

1.3. Tailwind CSS (이전엔 BootStrap)
1.3.1. 유틸리티 퍼스트* (Utility-First) 방식으로 설계된 CSS 프레임워크
1.3.2. BootStrap처럼 미리 만들어진 컴포넌트를 제공하는 대신, 테일윈드는 아주 작은 유틸리티 클래스를 제공
*유틸리티 퍼스트: 작고 단일한 역할만 하는 CSS 클래스를 조합해서 UI를 만드는 방식
.btn-primary { padding: 10px; background-color: blue; color: white; }
<button class="btn-primary"></button>
<button class="bg-blue-500 text-white p-2.5"></button>

twMerge('px-2 py-1 bg-red hover:bg-dark-red', 'p-3 bg-[#B91C1C]')
→ 'hover:bg-dark-red p-3 bg-[#B91C1C]'

*/