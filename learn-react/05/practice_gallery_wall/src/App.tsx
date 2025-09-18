import Articles from "./components/Articles";

export default function App() {
	return (
		<main className="min-h-screen bg-background">
			<header className="text-center py-8 sm:py-12 px-4 sm:px-6">
				<h1 className="mb-3 sm:mb-4 text-xl sm:text-2xl">Gallery Wall</h1>
				<p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
					An art gallery inspired collection featuring natural landscapes in
					various scales and arrangements
				</p>
			</header>

			<section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
				<Articles />
			</section>

			<footer className="text-center py-6 sm:py-8 px-4 sm:px-6 border-t border-border bg-muted/30">
				<p className="text-muted-foreground text-sm sm:text-base">
					<span className="block sm:inline">
						Curated Photography Collection
					</span>
					<span className="hidden sm:inline"> • </span>
					<span className="block sm:inline">Gallery Wall Experience</span>
					<span className="block mt-2 text-xs sm:text-sm">
						0 images hidden • 0 displayed
					</span>
				</p>
			</footer>
		</main>
	);
}
