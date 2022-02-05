import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { Express } from "express";

const options = {
  swaggerDefinition: {
    info: {
      title: "Scrooge API",
      version: "1.0.0",
      description: "Scrooge Project API with express",
    },
    host: "localhost:3000",
    basePath: "/",
  },

  apis: ["../api/routers/*.ts", "../../swagger.json"],
};

const specs = swaggerJsdoc(options);

export default async (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
