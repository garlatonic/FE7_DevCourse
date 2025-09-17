export default function Ex1Design({
	bg,
	userImage,
	alias,
	username,
	clickHandler,
}: {
	bg: string;
	userImage: string;
	alias: string;
	username: string;
	clickHandler: () => void;
}) {
	return (
		<article className="card">
			<div>
				<img className="card-img" src={bg} alt="background-pic" />
			</div>
			<div className="profile">
				<img className="prof-img" src={userImage} alt="profile-pic" />
				<h3 className="alias">{alias}</h3>
				<p className="username">{username}</p>
				<button onClick={clickHandler}>Follow</button>
			</div>
		</article>
	);
}
