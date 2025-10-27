import { Calendar, Tag } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import supabase from "../../utils/supabase";
import type { Database } from "../../types/database";
import BlogListSkeleton from "../../components/loading/BlogListSkeleton";

type Post = Database["public"]["Tables"]["posts"]["Row"];
export default function BlogList() {
	const [posts, setPosts] = useState<Post[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getPosts = async () => {
			setIsLoading(true);
			try {
				const { data: posts, error } = await supabase.from("posts").select("*");
				if (error) throw error;
				setPosts(posts);
			} catch (e) {
				console.error(e);
			} finally {
				setIsLoading(false);
			}
		};
		getPosts();

		//구독
		const channel = supabase
			.channel("posts")
			.on(
				"postgres_changes",
				{
					event: "INSERT",
					schema: "public",
					table: "posts",
				},
				(payload) => {
					console.log(payload);
					setPosts((posts) => [...posts, payload.new as Post]);
				},
			)
			.subscribe((status) => console.log(status));

		return () => {
			supabase.removeChannel(channel);
		};
	}, []);

	return (
		<div>
			<div className="mb-12">
				<h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
				<p className="text-lg text-gray-600 max-w-2xl">
					Thoughts on design, development, and the intersection of technology
					and creativity.
				</p>
			</div>

			<div className="space-y-8">
				{isLoading && <BlogListSkeleton />}
				{!isLoading &&
					posts.map((post) => (
						<article key={post.id} className="group">
							<Link to={`/blog/${post.id}`} className="block">
								<div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
									<div className="md:flex">
										<div className="md:w-1/3 relative overflow-hidden h-52">
											<div
												className={`absolute inset-0 bg-gradient-to-br opacity-90`}
											></div>
											<img
												src={post?.thumbnail}
												alt={post.title}
												className="w-full h-48 md:h-full object-cover"
											/>
											<div className="absolute inset-0 bg-black opacity-20"></div>
										</div>
										<div className="md:w-2/3 p-6 md:p-8">
											<div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
												<div className="flex items-center">
													<Calendar size={14} className="mr-1" />
													{new Date(post.created_at).toLocaleDateString(
														"en-US",
														{
															month: "short",
															day: "numeric",
															year: "numeric",
														},
													)}
												</div>
												<div className="flex items-center">
													<Tag size={14} className="mr-1" />
													{post.category}
												</div>
											</div>
											<h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
												{post.title}
											</h2>
											<p className="text-gray-600 leading-relaxed">
												{post.content}
											</p>
										</div>
									</div>
								</div>
							</Link>
						</article>
					))}
			</div>
		</div>
	);
}
