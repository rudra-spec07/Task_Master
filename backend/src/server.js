import app from "./app.js";
import sequelize from "./config/database.js";
import env from "./config/env.js";
import "./domain/index.js";

import seedAdmin from "./seeds/admin.seed.js";

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully.");

    await sequelize.sync();
    console.log("✅ Database synchronized.");
    await seedAdmin();

    app.listen(env.port, () => {
      console.log(`🚀 Server is running on http://localhost:${env.port}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();