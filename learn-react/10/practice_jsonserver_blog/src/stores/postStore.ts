import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { axiosInstance } from "../api/axiosInstance";

type PostStore = {
	posts: Post[];
	isLoadingPosts: boolean;
	error: string;
	post: Post | null;
	isLoadingPost: boolean;
	errorPost: string;
	fetchPosts: (url?: string) => Promise<void>;
	fetchPost: (url?: string) => Promise<void>;
	addPost: (formData: Post) => Promise<Post>;
};

export const usePostStore = create<PostStore>()(
	immer((set) => ({
		posts: [],
		isLoadingPosts: true,
		error: "",

		post: null,
		isLoadingPost: true,
		errorPost: "",

		fetchPosts: async (url?: string) => {
			// 상태를 먼저 바꿔주고 데이터 통신을 진행
			set((state) => {
				state.isLoadingPosts = true;
				state.error = "";
			});

			try {
				const { data } = await axiosInstance.get(url || "posts");
				set((state) => {
					state.posts = data;
					state.isLoadingPosts = false;
				});
			} catch (error) {
				console.error(error);
				set((state) => {
					state.error = "게시글 불러오기 실패";
					state.isLoadingPosts = false;
				});
			}
		},

		fetchPost: async (url?: string) => {
			// 상태를 먼저 바꿔주고 데이터 통신을 진행
			set((state) => {
				state.isLoadingPost = true;
				state.errorPost = "";
			});

			try {
				const { data } = await axiosInstance.get(url || "posts");
				set((state) => {
					state.post = data;
					state.isLoadingPost = false;
				});
			} catch (error) {
				console.error(error);
				set((state) => {
					state.errorPost = "게시글 불러오기 실패";
					state.isLoadingPost = false;
				});
			}
		},

		addPost: async (formData: Post) => {
			try {
				const { data } = await axiosInstance.post("posts", formData);
				return data; // data가 Post 타입이라 addPost 타입에 잘 붙이기
			} catch (error) {
				console.error(error);
			}
		},
	})),
);
