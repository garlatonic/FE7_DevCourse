import { Link, NavLink, Outlet, useNavigate } from "react-router";

// Link -> 단순 이동
// NavLink -> 단순이동 + isActive
export default function DefaultLayout() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/team/2/group/3");
	};
	return (
		<>
			<header>
				<h1>header</h1>
				<nav>
					<Link to="/">home</Link>
					<NavLink
						to="/about"
						style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
					>
						{({ isActive }) => <span>about{isActive && "(선택)"}</span>}
					</NavLink>
					<button onClick={handleClick}>대시보드로 이동</button>
				</nav>
			</header>
			<Outlet />
			<footer>
				<h1>footer</h1>
			</footer>
		</>
	);
}
