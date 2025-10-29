# 중첩 라우트 미션 — “언어 및 학습 문서 경로 만들기”

## 개요

**기본 라우트와 중첩 라우트만** 사용해 `/lang`, `/docs` 하위에 정적(고정) 경로들을 구성합니다.  
각 경로는 서로 다른 내용을 보여줍니다. 보여지는 내용은 하단 요구 사항을 참고하세요.

## 요구사항

1. **페이지별 콘텐츠 규칙**

- 아래의 경로가 모두 렌더링 되도록 폴더와 파일을 생성하여 작성합니다.

  - `/` (홈)
  - `/lang`
  - `/lang/html`
  - `/lang/css`
  - `/lang/javascript`
  - `/docs`
  - `/docs/guides`
  - `/docs/guides/getting-started`

- 각 페이지 본문에 **고유 제목**을 렌더링하세요.

  - `/` → 홈
  - `/lang` → ”언어 홈”
  - `/lang/html` → “HTML 문서”
  - `/lang/css` → “CSS 문서”
  - `/lang/javascript` → “JavaScript 문서”
  - `/docs` → “가이드 홈”
  - `/docs/guides` → “가이드 모음”
  - `/docs/guides/getting-started` → “시작하기 가이드”

## 학습목표

- Next.js App Router에서 **기본 라우트**와 **중첩 라우트**(폴더 구조 기반) 개념 이해
- 정적 경로만으로 **깊이 2\~3단계**의 트리형 네비게이션 설계
