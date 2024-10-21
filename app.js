const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const colors = require("colors");
const expressLayouts = require("express-ejs-layouts");
const connectDB = require("./config/db");
const flash = require("connect-flash/lib/flash");
const session = require("express-session");

const app = express();

// Connection  to database
connectDB();

// Initialize session
app.use(
    session({
        secret: "your_secret_key",
        resave: false,
        saveUninitialized: true,
    })
);

// Initialize template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Initialize template layout
app.use(expressLayouts);
app.set("layout", "layout/main");

// Express requests
app.use(express.json());
app.use(express.urlencoded({ extends: false }));

// Public static folder
app.use(express.static(path.join(__dirname, "public")));

// Initialize message
app.use(flash());
// Routes
app.use("/auth", require("./routes/auth.route"));
app.use("/", (req, res) => {
    return res.render("index", { title: "Home page" });
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`.bgGreen);
});
