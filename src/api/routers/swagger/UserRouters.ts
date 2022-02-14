export const SwaggerUserRouters = {
  "/info": {
    put: {
      tags: ["Users"],
      summary: "Update user information",
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
    get: {
      tags: ["Users"],
      summary: "Update user information",
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
  "/signup": {},
  "/login": {},
  "/refresh": {},
  "/password/{email}": {},
  "/password": {},
  //   "/info": {},
  "/check/{email}": {},
  "/": {},
  "/restore/{id}": {},
  //   "/info": {},
  "/signout": {},
};
