import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT,

  host: process.env.HOST,

  api: {
    prefix: "/api",
  },

  jwt: {
    algorithm: process.env.JWT_ALGORITHM || "HS256",
    secret: process.env.SECRET || "Scrooge",
    expire: {
      access: process.env.JWT_ACCESS_TOKEN,
      refresh: process.env.JWT_REFRESH_TOKEN,
    },
  },

  OAuth: {
    kakao: {
      client_id: process.env.KAKAO_CLIENT_ID,
      client_secret: process.env.KAKAO_CLIENT_SECRET,
      redirect_uri: process.env.KAKAO_REDIRECT_URI,
      login_url: process.env.KAKAO_LOGIN_URL,
      signup_url: process.env.KAKAO_SIGNUP_URL,
    },
    google: {
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI,
      login_url: process.env.GOOGLE_LOGIN_URL,
      signup_url: process.env.GOOGLE_SIGNUP_URL,
    },
  },

  database: {
    mysql: {
      host: process.env.HOST || "localhost",
      port: process.env.PORT || 3306,
      username: process.env.USERNAME || "root",
      password: process.env.PASSWORD || "",
      database: process.env.DATABASE || "test_database",
      entities: ["src/database/entity/**/*.ts", "dist/database/entity/**/*.js"],
      migrations: ["src/database/migration/**/*.ts"],
      subscribers: ["src/database/subscriber/**/*.ts"],
    },
    AWS_RDS: {
      host: process.env.RDS_HOST,
      port: process.env.RDS_PORT,
      username: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      database: process.env.RDS_DATABASE,
      entities: ["src/database/entity/**/*.ts", "dist/database/entity/**/*.js"],
      migrations: ["src/database/migration/**/*.ts"],
      subscribers: ["src/database/subscriber/**/*.ts"],
    },
  },

  s3: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
    region: process.env.S3_REGION,
  },

  multerS3: {
    bucket: process.env.BUCKET,
    acl: process.env.ACL,
  },

  AWS_SES: {},
};
