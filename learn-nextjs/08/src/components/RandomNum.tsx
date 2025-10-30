"use cache";

export default async function RandomNum() {
	const res = await fetch("http://localhost:4000/random");
	const randomNum = await res.json();
	return <p>{randomNum}</p>;
}
