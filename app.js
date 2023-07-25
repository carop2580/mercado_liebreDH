// ==========> requerimos los modulos para trabajar
const path = require("path");
const express = require("express");
const app = express();
// ==========> creamos la ruta a los archivos estaticos 
const ruta = path.join(__dirname, "public");
const static = express.static(ruta);
app.use(static);


app.get("/",(req,res)=>{
    let ruta = path.join(__dirname, "./views/index.html")
    res.sendFile(ruta);
})
app.get("/register",(req,res)=>{
    let ruta = path.join(__dirname, "./views/register.html")
    res.sendFile(ruta);
})
app.get("/loguin",(req,res)=>{
    let ruta = path.join(__dirname, "./views/loguin.html")
    res.sendFile(ruta);
})


// ==========> creamos el servidor y le pasamos un mensaje para verificar su funcionalidad

app.listen(3000,()=>{
    console.log("el servidor esta funcionando")
})