const express = require("express");
const res = require("express/lib/response");
const Contenedor = require("./crudo-desafio4-main");
const app = express();
const productos = new Contenedor("productos");
app.get("/", (req, res) => {
	res.send(`<h1 style="color:red;">¡Hola y bienvenido al servidor!</h1>`);
});
app.get("/productos", async (req, res) => {
	const all = await productos.getAll();
	await console.log(all);
	res.send(all);
});
app.get("/productosRandom", async (req, res) => {
	const all = await productos.getAll();
	let random = Math.floor(Math.random() * (all.length - 1 + 1) + 1);
	console.log(random);
	const randomItem = await productos.getById(random);
	res.send(randomItem);
});

const PORT = 8080;
const server = app.listen(PORT, () => {
	console.log(`listen on ${PORT}`);
});
server.on("error", (e) => console.log(e));
