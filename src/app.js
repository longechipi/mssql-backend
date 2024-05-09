import express from "express";
import usersRutas from "./routes/users.routes.js";

const app = express();
app.use(express.json());
app.use(usersRutas);

export default app;
