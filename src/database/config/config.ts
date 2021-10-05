import dotenv from "dotenv";
dotenv.config();

export default {
  "development": {
    "username": process.env.USERNAME || "root",
    "password": process.env.PASSWORD || null,
    "database": process.env.DATABASE || "scrooge",
    "host": process.env.HOST || "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
