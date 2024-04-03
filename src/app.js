require("dotenv").config();
const express = require("express");
const { getMaxListeners } = require("process");
const app = express();
const mainRouter = require("./routes")

app.use(express.json())

app.get("/", (req,res) => {
res.status(200).json({message: "hello undefined api!" })

})

// app.use("/api", mainRouter)

module.exports = app;