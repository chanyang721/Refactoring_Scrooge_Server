import {createConnection, useContainer} from "typeorm";
import * as typedi from "typedi";
// import { Container } from "typeorm-typedi-extensions";

const connection = async () => {
    try {
        // useContainer(Container)
        const connection = await createConnection();

        typedi.Container.set("connection", connection);
    } catch (error) {
        console.log(error.message);
    }
};

export default connection;
