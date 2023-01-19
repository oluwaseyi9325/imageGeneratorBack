const express= require("express")
const cors= require("cors");
const { postRoutes } = require("./router/postRoutes");
const { getRoutes } = require("./router/getRoutes");
require("dotenv").config();
const helmet = require("helmet");
const PORT = process.env.PORT||5003
const morgan= require("morgan")
const app= express();
app.use(express.urlencoded({ extended: true, limit: "100mb" }));
  app.use(express.json({ limit: "100mb" }));
app.use(morgan("dev"))
app.use(helmet());
app.use(cors({
    origin:"*",
    methods:["GET","POST"]
}));

app.use("/postDetails",postRoutes)

app.use("/getDetails",getRoutes)

app.listen(PORT)