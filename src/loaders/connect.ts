import { ErrorFormat } from "../helper/utils/errorformat";
import { createConnection, useContainer } from "typeorm";
import { Container } from "typeorm-typedi-extensions";

const connection = async () => {
  try {
    useContainer(Container);
    const connection = await createConnection();
    const entities = connection["entityMetadatas"].map(
      (entity: any) => (entity = entity.name)
    );
    console.log(
      "entity file path is :",
      entities.length <= 0 ? "[ FALSE ]" : "[ TRUE ]"
    );
  } catch (error) {
    console.log(error.message);
    throw new ErrorFormat(400, "데이터 베이스 연결 에러", error.message);
  }
};

export default connection;
