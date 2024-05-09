import mssql from "mssql";

const dbSettings = {
  user: "sa",
  password: "Floresta123$$",
  server: "192.168.2.249", // Replace with your SQL Server hostname
  database: "IMLF",
  options: {
    encrypt: false, // Enforce encryption (recommended)
    trustServerCertificate: true, // Validate server certificate (recommended)
  },
};

export const getConnection = async () => {
  try {
    const pool = await mssql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
};
