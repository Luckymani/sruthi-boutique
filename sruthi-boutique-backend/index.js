//*imports
const express = require("express");
const mongoose = require("mongoose");

//*initianlisations
const app = express();
require("dotenv").config();

//? mongoose database connection
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};
mongoose
	.connect(process.env.MONGODB_URL, options)
	.then(() => {
		console.log("connection to the database succesfull");
	})
	.catch((err) => {
		console.log(err.message);
	});

app.listen(process.env.PORT, (err) => {
	console.log("succesfully running on port:", process.env.PORT);
});
