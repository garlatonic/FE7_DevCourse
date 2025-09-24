interface Post {
	id: string;
	title: string;
	views: number;
}
interface Comment {
	id: string;
	text: string;
	postId: string;
}
