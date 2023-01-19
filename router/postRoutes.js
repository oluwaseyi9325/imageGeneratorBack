const express= require("express");
const { postController } = require("../controllers/postControllers");

const postRoutes= express();


postRoutes.post("/",postController);

module.exports={postRoutes}