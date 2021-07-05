const express = require ("express");
const app = express.Router();
const path = require("path");

app.get("/", (req,res) => res.sendFile(path.resolve(__dirname,"../views/","index.html")));

app.get("/brunch-afternoon-tea", (req,res) => res.sendFile(path.resolve(__dirname,"../views/","brunch-afternoon-tea.html")));
app.get("/cataloghi", (req,res) => res.sendFile(path.resolve(__dirname,"../views/","cataloghi.html")));
app.get("/chi-siamo", (req,res) => res.sendFile(path.resolve(__dirname,"../views/","chi-siamo.html")));
app.get("/conttato", (req,res) => res.sendFile(path.resolve(__dirname,"../views/","conttato.html")));
app.get("/eventi", (req,res) => res.sendFile(path.resolve(__dirname,"../views/","eventi.html")));
app.get("/shop", (req,res) => res.sendFile(path.resolve(__dirname,"../views/","shop.html")));

module.exports = app;