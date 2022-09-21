const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require("./routes/userRoutes");
const classroomRoutes = require("./routes/classroomRoutes");
const schoolRoutes = require("./routes/schoolRoutes");
const signupRoute = require("./routes/userSignupRoute");

const methodOverride = require("method-override");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

// load the env vars
require("dotenv").config();
// const port = process.env.PORT || "3000";

// database require command // 
require("./db/connection")

// middleware mount 
app.use(morgan("dev"));
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride());

// mount routes 
app.use("/classroom", classroomRoutes);
app.use("/school", schoolRoutes);
app.use("/login", userRoutes);
app.use("/signup", signupRoute);

app.get("/", (req, res) => res.json("Welcome to DPA's Bright Spots!!!"));

app.listen(PORT, () => {
  console.log(`listening on port:${PORT}`);
});