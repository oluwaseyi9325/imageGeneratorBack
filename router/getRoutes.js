const express= require("express");
const { getControllers } = require("../controllers/getControllers");

const getRoutes= express();

getRoutes.get("/",getControllers)

module.exports={getRoutes}