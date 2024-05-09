import express from "express";
import usersRutas from "./routes/users.routes.js";
import valida from "./cors.js";

const app = express();
app.use(express.json());
app.use(valida);
app.use(usersRutas);

export default app;
