import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("notes-api", "root", "", {
  host: "35.225.144.134",
  dialect: "mysql",
});

export default db;
