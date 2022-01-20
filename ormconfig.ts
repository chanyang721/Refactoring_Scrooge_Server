import dotenv from "dotenv";
dotenv.config();

export default {
  type: "mysql",
  host: process.env.HOST || "localhost",
  port: process.env.PORT || 3306,
  username: process.env.USERNAME || "root",
  password: process.env.PASSWORD || "1q2w",
  database: process.env.DATABASE || "test_database",
  synchronize: true,
  logging: false,
  supportBigNumbers: true,
  bigNumberStrings: false,
  entities: ["src/database/entity/**/*.ts", "dist/database/entity/**/*.js"],
  migrations: ["src/database/migration/**/*.ts"],
  subscribers: ["src/database/subscriber/**/*.ts"],
};
