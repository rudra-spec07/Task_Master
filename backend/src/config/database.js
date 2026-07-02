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
//     // 👇 Yeh code check karega ki agar environment production hai toh hi SSL lagaye
//     dialectOptions: process.env.NODE_ENV === "production" ? {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false
//       }
//     } : {} 
//   }
// );

// export default sequelize;


import { Sequelize } from "sequelize";
import env from "./env.js";
import pg from "pg"; // 👈 1. Isko import karna zaroori hai

const sequelize = new Sequelize(
  env.db.name,
  env.db.user,
  env.db.password,
  {
    host: env.db.host,
    port: env.db.port,
    dialect: "postgres",
    dialectModule: pg, // 👈 2. Yeh line jodna zaroori hai Neon ke liye
    logging: false,
    // 👇 3. Neon DB securely connect karne ke liye yeh poora block chahiye
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

export default sequelize;