// 정의할 때 작성하는 파일 .d.ts
// src폴더 하위에 넣었기 때문에 자동으로 읽혀짐... 전역적으로

interface UserProps {
	userObj: { name: string; age: number; gender: string };
	clickHandler: () => void;
}
