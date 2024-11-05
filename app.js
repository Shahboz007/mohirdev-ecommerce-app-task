const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const colors = require("colors");
const expressLayouts = require("express-ejs-layouts");
const connectDB = require("./config/db");
const flash = require("connect-flash/lib/flash");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const { default: mongoose } = require("mongoose");

const app = express();

// Connection  to database
connectDB();

// Initialize session
app.use(
    session({
        store: MongoStore.create({
            client: mongoose.connection.getClient(),
            collectionName: "user_sessions",
        }),
        secret: "your_secret_key",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        },
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
app.use("/dashboard", require("./routes/dashboard/dashboard.route"));
app.use("/", (req, res) => {
    return res.render("index", { title: "Home page" });
});

// Error middleware
app.use()

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`.bgGreen);
});
