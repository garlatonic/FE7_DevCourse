import Article from "./Article";

export default function Articles() {
	const galleryImages = [
		{
			src: "https://2images.unsplash.com/photo-1604223190546-a43e4c7f29d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTcyNTk1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
			caption: "Majestic Mountain Landscape",
			alt: "Snow-capped mountains against a blue sky",
		},
		{
			src: "https://images.unsplash.com/photo-1758024264451-5cbfa9bee420?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			caption: "A green metal door in an old warehouse",
			alt: "Large olive green double doors in concrete room",
		},
		{
			src: "https://images.unsplash.com/photo-1610719306218-e73a87f8ed6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			caption: "Hotel Delta, Strada Isaccei, Tulcea, Romania",
			alt: "White concrete building during daytime",
		},
		{
			src: "https://images.unsplash.com/photo-1756698488092-ce1ffde6c492?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			caption:
				"Captured this waterfall rainbow at Spirit Falls in the Washington Gorge",
			alt: "Silhouetted figures watch a powerful waterfall with rainbow",
		},
		{
			src: "https://images.unsplash.com/photo-1757851704368-3ae8d337943d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			caption: "Fire pit",
			alt: "Adirondack chairs surround a lit fire pit in a backyard",
		},
		{
			src: "https://images.unsplash.com/photo-1757752463419-4f0788b2b544?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			caption: "Food and drink",
			alt: "Toasted bread with cream cheese figs and pistachios",
		},
		{
			src: "https://images.unsplash.com/photo-1756745678586-ffea7c66aeb2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			caption: "What melancholy sitting in luxury looks like",
			alt: "Polar bear relaxing on a lounge chair by the sea",
		},
		{
			src: "https://images.unsplash.com/photo-1757789325996-9a6e63b2bd0e?q=80&w=1543&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			caption:
				"Kronplatz, Mareo, Autonomous Province of Bolzano – South Tyrol, Italy",
			alt: "Sunlit mountain peak under dramatic clouds at dawn",
		},
	];

	return (
		<>
			<article
				className="grid gap-2 sm:gap-3 md:gap-4 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
				style={{
					gridAutoRows: "150px sm:180px md:200px",
				}}
			>
				{galleryImages.map((article, index) => (
					<Article key={index} article={article} />
				))}
			</article>
		</>
	);
}
