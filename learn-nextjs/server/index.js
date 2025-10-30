const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors());

app.get("/random", (req, res) => {
	const min = parseInt(req.query.min) || 0;
	const max = parseInt(req.query.max) || 100;

	const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	console.log(randomNumber);
	res.json(randomNumber);
});

app.listen(PORT, () => {
	console.log(`✅ Server running on http://localhost:${PORT}`);
});
