import RandomNum from "@/components/RandomNum";
import RandomNumber from "@/components/RandomNumber";
import { Suspense } from "react";

export default function Page() {
	return (
		<>
			<h1>Page Component</h1>
			<Suspense fallback={null}>
				<RandomNumber />
			</Suspense>
			<Suspense fallback={null}>
				<RandomNum />
			</Suspense>
		</>
	);
}
