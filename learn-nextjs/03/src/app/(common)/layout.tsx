export default function CommonLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<header>커먼헤더</header>
			{children}
			<footer>커먼푸터</footer>
		</>
	);
}
