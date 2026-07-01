// import { Sequelize } from "sequelize";
// import env from "./env.js";

// const sequelize = new Sequelize(
//   env.db.name,
//   env.db.user,
//   env.db.password,
//   {
//     host: env.db.host,
//     port: env.db.port,
//     dialect: "postgres",
//     logging: false,
//   }
// );

// export default sequelize;

import { Sequelize } from "sequelize";
import env from "./env.js";

const sequelize = new Sequelize(
  env.db.name,
  env.db.user,
  env.db.password,
  {
    host: env.db.host,
    port: env.db.port,
    dialect: "postgres",
    logging: false,
    // 👇 Yeh code check karega ki agar environment production hai toh hi SSL lagaye
    dialectOptions: process.env.NODE_ENV === "production" ? {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    } : {} 
  }
);

export default sequelize;