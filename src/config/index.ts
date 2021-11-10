
import dotenv from "dotenv";
dotenv.config();

export default {
    port: parseInt(process.env.PORT || "4000"),

    HOST: parseInt(process.env.HOST || "root"),

    api: {
        prefix: "/api"
    },

    jwt: {
        algorithm: process.env.JWT_ALGORITHM || "RS256",
        secret: process.env.SECRET || "Scrooge",
        expire: {
            access: parseFloat(process.env.JWT_ACCESS_TOKEN || "0"),
            refresh: parseFloat(process.env.JWT_REFLRESH_TOKEN || "0")
        }
    },

    database: {
        mysql: {
            host: process.env.HOST || "localhost",
            port: process.env.PORT || 3306,
            username: process.env.USERNAME || "root",
            password: process.env.PASSWORD || "",
            database: process.env.DATABASE || "test_database",
        }
    },

}