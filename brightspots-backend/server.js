const express = require("express");
const app = express();
const PORT = 3100;
const userRoutes = require("./routes/userRoutes");
const brightRoutes = require("./routes/brightRoutes");
const brightSpotsRoutes = require("./routes/brightSpotsRoutes");
const signupRoute = require("./routes/userSignupRoute");

const methodOverride = require("method-override");
const cors = require("cors");
const morgan = require("morgan");

// database require command // 
require("./db/connection")

// middleware mount 
app.use(morgan("dev"));
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// mount routes 
app.use("/brightspots", brightRoutes);
app.use("/schoolbrightspots", brightSpotsRoutes);
app.use("/login", userRoutes);
app.use("/signup", signupRoute);

app.get("/", (req, res) => res.json("Welcome to DPA's Bright Spots!!!"));
app.listen(PORT, () => console.log("listening on", PORT));
