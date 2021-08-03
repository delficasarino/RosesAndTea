//Requires
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

const app = express();

//App Server
app.set("port",process.env.PORT || 3000)
app.listen(app.get("port"),() => console.log("Server Start http://localhost:"+app.get("port")));

//EJS
app.set("view engine", "ejs");
app.set('views', path.resolve(__dirname, "./views")); 

//Middlewares
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

//Web Access
app.use(require("./routes/web"));


