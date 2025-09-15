// import React from "react";

import Article from "./components/Article";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/header";
import Nav from "./components/Nav";
import Section from "./components/Section";

// class App extends React.Component {
// 	render(): React.ReactNode {
// 		return <h1>hello, World(With Class Compotent)</h1>;
// 		// h1로 감싼 여기를 JSX라고 부름
// 	}
// }

// export default App;

// 함수형 컴포넌트
// export default function App() {
// 	return (
// 		<>
// 			<h1>hello, World(With Function Compotent)</h1>
// 		</>
// 	);
// }

export default function App () {
	return (
		<>
			<Header />
			<Nav />
			<Article />
			<Section />
			<Aside />
			<Footer />
		</>
	);
}