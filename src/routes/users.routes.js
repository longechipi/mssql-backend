import { Router } from "express";
import {
  getUsuarios,
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} from "../controllers/users.controllers.js";

const rutas = Router();

//---- Todos los Usuarios ----//
rutas.get("/users", getUsuarios);

//---- Usuario en Particular ----//
rutas.get("/users/:login", getUsuario);

//---- Creando un Usuario ----//
rutas.post("/users", createUsuario);

//---- Actualizando un Usuario ----//
rutas.put("/users/:login", updateUsuario);

//---- Elimando un Usuario ----//
rutas.delete("/users/:login", deleteUsuario);

export default rutas;
