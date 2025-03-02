import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("notes-api", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
