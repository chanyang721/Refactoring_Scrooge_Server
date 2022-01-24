import { Api404Error } from "../helper/utils/error/baseError";
import { createConnection } from "typeorm";

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
    console.error(error);
    throw new Api404Error(<string>error);
  }
};

export default connection;
