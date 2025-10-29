import Image from "next/image";
import { anton, doldam, notoSansKR } from "./layout";
import bird from "@/app/assets/images/bird.jpg";

export default function Page() {
	return (
		<>
			<h1 className={notoSansKR.className}>Page Component</h1>
			<h1 className={anton.className}>Page Component</h1>
			<h1 className={doldam.className}>Page Component</h1>
			<Image src={bird} alt="bird" style={{ width: "50%", height: "auto" }} />
			<Image
				width={640}
				height={448}
				src={
					"https://cdn.pixabay.com/photo/2025/07/27/10/26/blackbirds-9738306_1280.jpg"
				}
				alt="bird"
			/>
		</>
	);
}
