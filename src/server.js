import express from "express";
import * as path from "path";
import pages from "./pages.js";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const server = express();

server
  .use(express.urlencoded({ extended: true }))
  .use(express.static("public"))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")
  //A partir daqui ficam todas as rotas da aplicação junto com seus métodos
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage);

//ligar o servidor
server.listen(5500);
