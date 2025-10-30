import { cacheLife } from "next/cache";

export default async function RandomNumber() {
	"use cache";
	cacheLife("default");
	const res = await fetch("http://localhost:4000/random");
	const randomNum = await res.json();
	return <p>{randomNum}</p>;
}
