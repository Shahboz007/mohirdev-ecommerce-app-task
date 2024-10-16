const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const colors = require("colors");
const expressLayouts = require("express-ejs-layouts");

const app = express();

// Initial template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Initial template layout
app.use(expressLayouts);
app.set("layout", "layout/main");

// Express requests
app.use(express.json());
app.use(express.urlencoded({ extends: false }));

// Public static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res) => {
    return res.render("index", { title: "Home page" });
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`.bgGreen);
});
