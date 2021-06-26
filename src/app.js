const express = require("express");
const path = require("path");

const app = express();

app.set("port",process.env.PORT || 3080)

app.listen(app.get("port"),() => console.log("Server Start http://localhost:"+app.get("port")))

//Server
/* app.listen(3000,()=> console.log("Servidor en http://localhost:3080")); */

//Public Access
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

//Web Access
app.use(require("./routes/web"));


