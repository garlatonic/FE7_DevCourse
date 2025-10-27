import { useParams, Link, useNavigate } from "react-router";
import { Calendar, Tag, ArrowLeft, Edit, Delete, X } from "lucide-react";
import { useEffect, useState } from "react";
import supabase from "../../utils/supabase";
import type { Database } from "../../types/database";
import BlogDetailSkeleton from "../../components/loading/BlogDetailSkeleton";

type Post = Database["public"]["Tables"]["posts"]["Row"];
type Profile = Database["public"]["Tables"]["profiles"]["Row"];

type PostWithProfile = Post & {
	profile: Profile;
};

export default function BlogDetail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [post, setPost] = useState<PostWithProfile | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleDelete = async () => {
		// Handle post deletion logic here
		try {
			const { error } = await supabase
				.from("posts")
				.delete()
				.eq("id", Number(id));
			if (error) throw error;
			navigate("/blog");
		} catch (e) {
			console.error(e);
		}
	};
	useEffect(() => {
		const fetchPost = async () => {
			try {
				setIsLoading(true);
				// 게시글 정보
				const { data: post, error } = await supabase
					.from("posts")
					.select(
						`*, profile:profiles(id, display_name, avatar_url, bio, email, created_at)`,
						// foreign 키가 연결되어 있을때만 사용이 가능
					)
					.eq("id", Number(id))
					.single();
				if (error) throw error;
				setPost(post);
			} catch (e) {
				console.error(e);
			} finally {
				setIsLoading(false);
			}
		};
		fetchPost();
	}, [id]);

	return (
		<div>
			{isLoading && <BlogDetailSkeleton />}
			{!isLoading && (
				<div className="mb-8">
					<Link
						to="/blog"
						className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-6"
					>
						<ArrowLeft size={16} className="mr-2" />
						Back to Blog
					</Link>
				</div>
			)}

			<article>
				<header className="mb-8">
					<div className="relative overflow-hidden rounded-lg mb-6">
						<div
							className={`absolute inset-0 bg-gradient-to-br opacity-90`}
						></div>
						<img
							src={post?.thumbnail}
							alt={post?.title}
							className="w-full h-64 md:h-80 object-cover"
						/>
						<div className="absolute inset-0 bg-black opacity-20"></div>
					</div>

					<div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
						<div className="flex items-center">
							<Calendar size={14} className="mr-1" />
							{new Date(post?.created_at || "").toLocaleDateString("en-US", {
								month: "long",
								day: "numeric",
								year: "numeric",
							})}
						</div>
						<div className="flex items-center">
							<Tag size={14} className="mr-1" />
							{post?.category}
						</div>
						<span>0</span>
						<span>by {post?.profile.display_name}</span>
					</div>

					<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
						{post?.title}
					</h1>

					<div className="flex items-center justify-between border-b border-gray-200 pb-6">
						<div className="flex items-center space-x-4">
							<Link
								to={`/edit/${post?.id}`}
								className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
							>
								<Edit size={16} className="mr-2" />
								Edit
							</Link>
							<button
								className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
								onClick={() => setShowDeleteModal(true)}
							>
								<Delete size={16} className="mr-2" />
								Delete
							</button>
						</div>
					</div>
				</header>

				<div
					className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed"
					dangerouslySetInnerHTML={{ __html: post?.content as string }}
				/>

				<footer className="mt-12 pt-8 border-t border-gray-200">
					<div className="bg-gray-50 rounded-lg p-6">
						<div className="flex items-start space-x-4">
							<img
								src={post?.profile.avatar_url || undefined}
								alt={post?.profile.display_name || ""}
								className="w-16 h-16 rounded-full object-cover"
							/>
							<div className="flex-1">
								<h3 className="text-lg font-semibold text-gray-900 mb-2">
									About the Author
								</h3>
								<p className="text-gray-600 mb-2">
									<strong>{post?.profile.display_name}</strong>{" "}
									{post?.profile.bio}
								</p>
								<div className="flex space-x-4 text-sm text-gray-500">
									<span>0 articles published</span>
									<span>•</span>
									<span>
										Joined{" "}
										{new Date(
											post?.profile.created_at || "",
										).toLocaleDateString("en-US", {
											month: "long",
											day: "numeric",
											year: "numeric",
										})}
									</span>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</article>
			{/* Delete Confirmation Modal */}
			{showDeleteModal && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
					<div className="bg-white rounded-lg shadow-xl max-w-md w-full">
						<div className="p-6">
							<div className="flex items-center justify-between mb-4">
								<h3 className="text-lg font-semibold text-gray-900">
									Delete Post
								</h3>
								<button
									onClick={() => setShowDeleteModal(false)}
									className="text-gray-400 hover:text-gray-600 transition-colors"
								>
									<X size={20} />
								</button>
							</div>

							<p className="text-gray-600 mb-6">
								Are you sure you want to delete "<strong>{post?.title}</strong>
								"? This action cannot be undone.
							</p>

							<div className="flex items-center justify-end space-x-4">
								<button
									onClick={() => setShowDeleteModal(false)}
									className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
								>
									Cancel
								</button>
								<button
									onClick={handleDelete}
									className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
								>
									Delete Post
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
