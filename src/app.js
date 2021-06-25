const express = require ("express");
const app = express ();

app.set("port",process.env.PORT || 3080)

app.listen(app.get("port"),() => console.log("Server Start http://localhost:"+app.get("port")))

/* app.listen(3080,() => console.log("Server start", "http://localhost:3080")); */

app.use(express.static("../public")); //.static todo archivo que se quiera exponer de forma publica en el servidor

const web =require("./routes/web"); 
app.use(web);

const menus =require("./routes/menus"); 
app.use(menus);


