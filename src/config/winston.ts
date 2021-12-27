import winston from "winston";
import winstonDaily from "winston-daily-rotate-file";
const { combine, timestamp, printf, colorize, simple } = winston.format;

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
};
winston.addColors(colors);

const format = combine(
  timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  colorize({ all: true }),
  printf((info) => {
    return `[ ${info.timestamp} ] || [ ${info.level} ]: ${info.message}`;
  })
  //   simple()
);

const logDir = "./src/config/logs";
const transports = [
  new winstonDaily({
    level: "info",
    datePattern: "YYYY-MM-DD",
    dirname: logDir + `/info`,
    filename: `%DATE%.log`,
    maxFiles: 10,
    zippedArchive: true,
  }),
  new winstonDaily({
    level: "error",
    datePattern: "YYYY-MM-DD",
    dirname: logDir + `/error`,
    filename: `%DATE%.error.log`,
    maxFiles: 10,
    zippedArchive: true,
  }),
  new winston.transports.Console({
    format,
    handleExceptions: true,
  }),
];

const level = () => {
  const env = process.env.NODE_ENV || "development";
  const isDevelopment = env === "development";
  return isDevelopment ? "debug" : "warn";
};

const logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

// logger.stream = {
//   write: (info: any) => {
//     logger.info(info);
//   },
// };

// if (process.env.NODE_ENV !== "production") {
//   logger.add(
//     new winston.transports.Console({
//       format: winston.format.combine(
//         winston.format.colorize({ all: true }),
//         winston.format.simple()
//       ),
//     })
//   );
// }

export default logger;
