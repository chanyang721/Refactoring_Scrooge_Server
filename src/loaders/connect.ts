import { createConnection, useContainer } from "typeorm";
import * as typedi from "typedi";
// import { Container } from "typeorm-typedi-extensions";
import config from "../config"


const connection = async () => {
    // useContainer(Container)
    const connection = await createConnection();

    typedi.Container.set("connection", connection);
}

export default connection