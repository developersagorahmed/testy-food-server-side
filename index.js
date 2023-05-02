const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const chefData = require("./chefData.json");

app.use(cors());

app.get("/", (req, res) => {
	res.send(chefData);
});

app.get("/:id", (req, res) => {
	const id = req.params.id;

	const details = chefData.filter((d) => d.id == id);
	res.send(details);
});

app.listen(5000, () => {
	console.log(`server is running port ${port}`);
});
