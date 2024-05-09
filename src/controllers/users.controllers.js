import { getConnection } from "../database/connection.js";
import sql from "mssql";

//funcion para consultar todos los Usuarios
export const getUsuarios = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM sec_users");
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Funcion para obtener un solo usuario
export const getUsuario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("login", sql.VarChar, req.params.login)
      .query("SELECT * FROM sec_users WHERE LOGIN = @login");
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//funcion para crear un usuario
export const createUsuario = async (req, res) => {
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("login", sql.VarChar, req.body.login)
    .input("pswd", sql.VarChar, req.body.pswd)
    .input("name", sql.VarChar, req.body.name)
    .input("email", sql.VarChar, req.body.email)
    .input("active", sql.VarChar, req.body.active)
    .input("activation_code", sql.VarChar, req.body.activation_code)
    .input("priv_admin", sql.VarChar, req.body.priv_admin)
    .input("dpto", sql.VarChar, req.body.dpto)
    .input("empresa", sql.VarChar, req.body.empresa)
    .input("consultorio", sql.VarChar, req.body.consultorio)
    .query(
      "INSERT INTO sec_users(login, pswd, name, email, active, activation_code, priv_admin, dpto, empresa, consultorio) VALUES(@login, @pswd, @name, @email, @active, @activation_code, @priv_admin, @dpto, @empresa, @consultorio)"
    );
  res.json({
    login: req.body.name,
    pswd: req.body.pswd,
    name: req.body.name,
    email: req.body.email,
    active: req.body.active,
    activation_code: req.body.activation_code,
    priv_admin: req.body.priv_admin,
    dpto: req.body.dpto,
    empresa: req.body.empresa,
    consultorio: req.body.consultorio,
  });
};

//Funcion para actualizar un usuario
export const updateUsuario = async (req, res) => {
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("login", req.params.login)
    .input("pswd", sql.VarChar, req.body.pswd)
    .query("UPDATE sec_users SET pswd = @pswd  WHERE login = @login");
  if (result.rowsAffected[0] === 0) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }
  return res.json({ message: "Usuario Actualizado" });
};

// Funcion para eliminar usuario
export const deleteUsuario = async (req, res) => {
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("login", sql.VarChar, req.params.login)
    .query("DELETE FROM sec_users WHERE login = @login");
  if (result.rowsAffected[0] === 0) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }
  return res.json({ message: "Usuario Eliminado" });
};
