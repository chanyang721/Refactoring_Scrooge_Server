import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { Express } from "express";
import {
  SwaggerUserProperties,
  SwaggerUserPropertiesRequired,
} from "../database/entity/user";

const options: swaggerJSDoc.OAS3Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Scrooge API Documents",
      version: "1.0.0",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Scrooge",
        url: "https://scrooge.life",
        email: "scrooge@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:{port}/{basePath}",
        description: "Development server",
        variables: {
          port: {
            default: "3000",
          },
          basePath: {
            default: "#",
          },
        },
      },
      {
        url: "https://scrooge.life",
        description: "Production server",
      },
    ],
    tags: [
      {
        name: "Users",
        description: "Operation about user",
      },
      {
        name: "Category",
        description: "Category APIs",
      },
    ],
    paths: {
      "/info": {
        put: {
          tags: ["Users"],
          summary: "Update user information",
          security: [
            {
              Authorization: ["Token"],
            },
          ],
          parameters: [
            {
              name: "body",
              in: "body",
              required: true,
              description: "수정중",
              allowEmptyValue: true,
              schema: {
                $ref: "#/components/schemas/user",
              },
              style: "simple",
            },
          ],
        },
      },
    },
    components: {
      schemas: {
        user: {
          type: "object",
          required: SwaggerUserPropertiesRequired,
          properties: SwaggerUserProperties,
        },
      },
    },
  },
  apis: ["../api/routers/*.ts"],
};

const specs = swaggerJSDoc(options);

export default async (app: Express) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
  );
};
