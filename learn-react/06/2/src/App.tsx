import { RotateCcw, Trash2 } from "lucide-react";
import { ImageWithFallback } from "./components/ImageWithFallback";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

// 1. 개별삭제
// 1.1. 삭제가 되었다는 것을 기록하기 위해서 배열
// 1.1.1 const deleteImage = [0, 0]
export default function App() {
	const [deletedImages, setDeletedImages] = useState<Set<number>>(new Set());
	const hasDeletedImages = deletedImages.size > 0;
	const handleRestoreImage = (index: number) => {
		setDeletedImages((deletedImages) => {
			const newSet = new Set(deletedImages);
			newSet.delete(index);
			return newSet;
		});
	};
	const handleRestoreAll = () => {
		setDeletedImages(new Set());
	};
	const handleDeletedImage = (index: number) => {
		setDeletedImages((deletedImages) => new Set([...deletedImages, index]));
	};
	const galleryImages = [
		{
			src: "https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTcyNTk1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
			caption: "Majestic Mountain Landscape",
			alt: "Snow-capped mountains against a blue sky",
		},
		{
			src: "https://images.unsplash.com/photo-1617381519460-d87050ddeb92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1NzMxNjA2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
			caption: "Modern City Architecture",
			alt: "Contemporary urban buildings with glass facades",
		},
		{
			src: "https://images.unsplash.com/photo-1514747975201-4715db583da9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmVzfGVufDF8fHx8MTc1NzI4NzIzNHww&ixlib=rb-4.1.0&q=80&w=1080",
			caption: "Ocean Waves",
			alt: "Powerful ocean waves crashing on the shore",
		},
		{
			src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB0cmVlc3xlbnwxfHx8fDE3NTcyMzQwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
			caption: "Forest Trees",
			alt: "Dense forest with tall green trees",
		},
		{
			src: "https://images.unsplash.com/photo-1490735891913-40897cdaafd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBza3l8ZW58MXx8fHwxNzU3MzM2MTk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
			caption: "Sunset Sky",
			alt: "Beautiful sunset with orange and pink colors in the sky",
		},
		{
			src: "https://images.unsplash.com/photo-1605895370326-e96b9d52e3f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBnYXJkZW58ZW58MXx8fHwxNzU3MzM2MTk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
			caption: "Flower Garden",
			alt: "Colorful flowers blooming in a garden",
		},
		{
			src: "https://images.unsplash.com/photo-1729543039240-e62cc29133f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtlJTIwcmVmbGVjdGlvbiUyMG5hdHVyZXxlbnwxfHx8fDE3NTgxMzYyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
			caption: "Lake Reflection",
			alt: "Serene lake with perfect mountain reflections",
		},
		{
			src: "https://images.unsplash.com/photo-1685564551828-5724076c8458?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkZmxvd2VyJTIwbWVhZG93JTIwbGFuZHNjYXBlfGVufDF8fHx8MTc1ODEzNjI5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
			caption: "Wildflower Meadow",
			alt: "Colorful wildflowers in a vast meadow landscape",
		},
	];
	return (
		<main className="min-h-screen bg-background">
			<header className="text-center py-8 sm:py-12 px-4 sm:px-6">
				{/* 복구 버튼 영역 추가 */}
				<div className="flex justify-between items-start max-w-7xl mx-auto mb-8">
					{hasDeletedImages && (
						<div className="flex gap-3">
							<button
								className="flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-background hover:bg-accent transition-colors duration-200"
								onClick={handleRestoreAll}
							>
								<RotateCcw className="w-4 h-4" />
								Restore All {deletedImages.size}
							</button>
						</div>
					)}
				</div>
				<h1 className="mb-3 sm:mb-4 text-xl sm:text-2xl">Gallery Wall</h1>
				<p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
					An art gallery inspired collection featuring natural landscapes in
					various scales and arrangements
				</p>
			</header>
			<section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
				<article
					className="grid gap-2 sm:gap-3 md:gap-4 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
					style={{
						gridAutoRows: "150px sm:180px md:200px",
					}}
				>
					{/* 이미지 1장 렌더링 */}
					{/* 삭제가 되었을 때는 figure 태그에 classname에 `opacity-40 grayscale border-dashed border-muted-foreground/30` 클래스를 추가하세요 */}
					{galleryImages.map((image, index) => {
						const isDeleted = deletedImages.has(index);
						return (
							<figure
								key={index}
								className={twMerge(
									`
                  group bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 relative                 
                  col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-2
                `,
									isDeleted &&
										"opacity-40 grayscale border-dashed border-muted-foreground/30",
								)}
								style={{
									borderWidth: "0.5px",
								}}
							>
								<section className="relative overflow-hidden h-full">
									<ImageWithFallback
										src={image.src}
										alt={image.alt}
										className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110`}
									/>
									<section className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></section>
									{/* Delete button */}
									{!isDeleted && (
										<button
											className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-destructive text-destructive-foreground rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 hover:bg-destructive/90"
											onClick={() => handleDeletedImage(index)}
										>
											<Trash2 className="w-4 h-4" />
										</button>
									)}
									{/* 삭제가 안되었을 때 캡션 */}
									{!isDeleted && (
										<figcaption
											className={`
                        absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent 
                        text-white transform translate-y-full group-hover:translate-y-0 
                        transition-transform duration-300 p-3 sm:p-3 md:p-4
                      `}
										>
											<h3 className="mb-1">{image.caption}</h3>
											<p className="text-white/80 text-sm leading-relaxed">
												{image.alt}
											</p>
										</figcaption>
									)}
									{/* 삭제가 되었을 때 캡션 */}
									{isDeleted && (
										<div className="absolute inset-0 flex items-center justify-center bg-black/20">
											<button
												className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-md hover:bg-accent transition-colors duration-200 shadow-lg"
												onClick={() => handleRestoreImage(index)}
											>
												<RotateCcw className="w-4 h-4" />
												Restore
											</button>
										</div>
									)}
								</section>
							</figure>
						);
					})}
				</article>
			</section>

			<footer className="text-center py-6 sm:py-8 px-4 sm:px-6 border-t border-border bg-muted/30">
				<p className="text-muted-foreground text-sm sm:text-base">
					<span className="block sm:inline">
						Curated Photography Collection
					</span>
					<span className="hidden sm:inline"> • </span>
					<span className="block sm:inline">Gallery Wall Experience</span>
					<span className="block mt-2 text-xs sm:text-sm">
						{deletedImages.size} images hidden •{" "}
						{galleryImages.length - deletedImages.size} displayed
					</span>
				</p>
			</footer>
		</main>
	);
}
