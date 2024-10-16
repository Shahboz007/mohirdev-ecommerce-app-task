const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const colors = require("colors");

const app = express();

// Initial template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extends: false }));

app.use("/", (req, res) => {
    return res.render("index");
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`.bgGreen);
});
