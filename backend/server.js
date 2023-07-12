const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const calculate = require("./routes/calculate");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/bmi", calculate);

app.listen(process.env.PORT, () => {
    console.log("server started");
});
