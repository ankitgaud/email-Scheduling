const { createConnection } = require("typeorm");
require('dotenv').config()

BaseConnection = async () =>{
    const connection = await createConnection({
        type: "mysql",
        host: "localhost",
        port: "3306",
        username: "root",
        password: "",
        database: "big_app",
        synchronize: false,
        logging: false,
        entities: [
            require('./entity/messageSchema')
        ]
    });
    return connection;
}

module.exports = BaseConnection();