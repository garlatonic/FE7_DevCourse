export default function ProfileEx() {
	return (
		<article className="card">
			<div>
				<img
					className="card-img"
					src="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					alt="background-pic"
				/>
			</div>
			<div className="profile">
				<img
					className="prof-img"
					src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					alt="profile-pic"
				/>
				<h3 className="alias">Sally Ramos</h3>
				<p className="username">@sallytheramos</p>
				<button>Follow</button>
			</div>
		</article>
	);
}
