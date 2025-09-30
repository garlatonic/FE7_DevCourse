import React, { useState } from "react";
import { usePostStore } from "../stores/postStore";
import { useNavigate } from "react-router";

export default function Write() {
	const navigate = useNavigate();
	const addPost = usePostStore((state) => state.addPost);

	const [title, setTitle] = useState("");
	const [category, setCategory] = useState("");
	const [writer, setWriter] = useState("");
	const [desc, setDesc] = useState("");

	// 썸네일
	// 1. 이미지 파일을 서버에 업로드하는 방식
	// 2. 이미지를 Base64 문자열로 인코딩한 후에 Data URL로 만드는 방식
	const [thumbnail, setThumbnail] = useState("");
	const handleThumbnail = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const file = e.target.files && e.target.files[0];
		if (file) {
			// FileReader()로 리더 객체 만들기
			const reader = new FileReader();
			// 읽는 작업을 끝나면 결과값 이벤트
			reader.onloadend = () => {
				// Base64 문자열로 만들어진 건 data:image/어쩌구로 나옴
				setThumbnail(reader.result as string);
			};
			// 읽는 작업
			reader.readAsDataURL(file);
		}
	};
	const [thumbnailAvatar, setThumbnailAvatar] = useState("");

	const handleThumbnailAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		const file = e.target.files && e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setThumbnailAvatar(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	// 등록 핸들러
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (
			!title.trim() ||
			!category.trim() ||
			!thumbnail.trim() ||
			!thumbnailAvatar.trim() ||
			!writer.trim() ||
			!desc.trim()
		) {
			alert("모든 입력 값에 값을 입력해주세요");
			return;
		}

		// JSON-SERVER (REST API)
		// 등록
		const data = await addPost({
			title,
			category,
			writer,
			desc,
			thumbnail,
			thumbnailAvatar,
			createdAt: new Date(),
		});

		if (data) {
			console.log("게시물 등록 완료");
			navigate("/");
		}
	};
	return (
		<>
			<section className="bg-white ">
				<div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
					<h2 className="mb-4 text-xl font-bold text-gray-900 ">
						Add a new Post
					</h2>
					<form onSubmit={handleSubmit}>
						<div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
							<div className="sm:col-span-2">
								<label
									htmlFor="title"
									className="block mb-2 text-sm font-medium text-gray-900 "
								>
									Title
								</label>
								<input
									type="text"
									name="title"
									id="title"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
									placeholder="Type product name"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									required
								/>
							</div>
							<div>
								<label
									htmlFor="category"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									Category
								</label>
								<select
									id="category"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
									value={category}
									onChange={(e) => setCategory(e.target.value)}
								>
									<option value={""}>Select category</option>
									<option value="Next.js">Next.js</option>
									<option value="React.js">React.js</option>
									<option value="Vue.js">Vue.js</option>
									<option value="HTML">HTML</option>
								</select>
							</div>
							<div>
								<label
									htmlFor="item-weight"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									Thumbnail
								</label>
								<label
									className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-white"
									htmlFor="user_avatar"
								>
									Upload file
								</label>
								<input
									className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50focus:outline-none   h-[42px] p-[7px]"
									aria-describedby="user_avatar_help"
									id="user_avatar"
									type="file"
									onChange={handleThumbnail}
								/>
							</div>
							<div>
								<label
									htmlFor="writer"
									className="block mb-2 text-sm font-medium text-gray-900 "
								>
									Writer
								</label>
								<input
									type="text"
									name="writer"
									id="writer"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
									placeholder="Type product name"
									value={writer}
									onChange={(e) => setWriter(e.target.value)}
									required
								/>
							</div>
							<div>
								<label
									htmlFor="writerAvatar"
									className="block mb-2 text-sm font-medium text-gray-900 "
								>
									Writer Thumnail
								</label>
								<input
									type="file"
									name="writerAvatar"
									id="writerAvatar"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
									placeholder="Type product name"
									onChange={handleThumbnailAvatar}
									required
								/>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="description"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									Description
								</label>
								<textarea
									id="description"
									rows={8}
									className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
									placeholder="Your description here"
									value={desc}
									onChange={(e) => setDesc(e.target.value)}
								></textarea>
							</div>
						</div>
						<button
							type="submit"
							className="inline-flex border border-slate-500 items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center  bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800"
						>
							Add Post
						</button>
					</form>
				</div>
			</section>
		</>
	);
}
