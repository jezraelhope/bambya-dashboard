const express = require("express");
const app = express();
const port = 9001;

app.get("/", (req, res) => {
	res.send("This is the root");
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
