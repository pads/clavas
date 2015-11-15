"use strict";

const koa = require("koa");
const send = require("koa-send");
const route = require("koa-route");

const server = koa();

server.use(route.get("/", function* serveIndexPage() {
    yield send(this, "/public/index.html");
}));

server.use(route.get("/client.ts", function* serveClient() {
    yield send(this, "client.ts");
}));

server.use(function* serveLibs() {
    yield send(this, this.path, { root: __dirname + "/node_modules" });
});

server.listen(3000);
