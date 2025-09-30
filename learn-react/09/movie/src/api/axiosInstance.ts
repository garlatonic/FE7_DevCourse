import axios from "axios";

const ACCESS_TOKEN =
	"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGVmZWFjYmEwNmEyY2MzZTMyNWY0ZjU3Zjg5YjY1MiIsIm5iZiI6MTc1ODY5ODM2MC4yMDUsInN1YiI6IjY4ZDM5Yjc4YjI1OTZkOTBkNjBlM2FjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TDZ25tc1YnMrOhYlFNXtoRYqLTO95ktn5pZowkkQdQA";

export const axiosInstance = axios.create({
	baseURL: "https://api.themoviedb.org/3/movie/",
	headers: {
		accept: "application/json",
		Authorization: ACCESS_TOKEN,
	},
	// params: {
	// 	language: "ko-KR", // 주소 뒤에 항상 param 붙여줌
	// },
});
