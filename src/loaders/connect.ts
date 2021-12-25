import { BaseError } from "../helper/utils/error/baseError";
import { createConnection } from "typeorm";
import { StatusCode } from "src/helper/utils/error/httpStatusCodes";

const connection = async () => {
  try {
    const connection = await createConnection();
    const entities = connection["entityMetadatas"].map(
      (entity: any) => (entity = entity.name)
    );
    console.log(
      "entity file path is :",
      entities.length <= 0 ? "[ FALSE ]" : "[ TRUE ]"
    );
  } catch (error) {
    console.error(error.message);
    throw new BaseError("Not_Found", StatusCode.Not_Found, error.message);
  }
};

export default connection;
