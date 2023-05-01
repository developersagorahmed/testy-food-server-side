const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const chefData = require("./chefData.json");

app.use(cors());

app.get("/", (req, res) => {
	res.send(chefData);
});

app.listen(5000, () => {
	console.log(`server is running port ${port}`);
});
