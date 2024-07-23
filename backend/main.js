require("dotenv").config();
require("./config/db.js")
const authRouter = require("./routes/authRoutes.js")
const otpRouter = require("./routes/otpRoute.js");
const folderRouter = require("./routes/folderRoutes.js");
const express = require("express");
const cors = require("cors");
const verifyToken = require("./middlewares/verifyToken.js");

const app = express();
app.use(cors({origin:true}));
app.use(express.json())

app.get("/",(req,res) =>{
    res.send("App is Running ")
})
app.use("/api/v1/auth",authRouter);

app.use(verifyToken);
app.use("/api/v1/otp",otpRouter)
app.use("/api/v1/folder",folderRouter);

app.listen(process.env.PORT, () =>{
    console.log("-------------App Listen on port " + process.env.PORT + " ---------------")
});