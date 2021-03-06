const { Timestamp } = require('typeorm');

const EntitySchema = require('typeorm').EntitySchema;
const Message = require('../classModel/messageClass').Message;

module.exports = new EntitySchema({
    name: "Message",
    target: Message,
    columns: {
        id : {
            primary: true,
            type: "bigint",
            generated: true
        },
        email: {
            type: "varchar",
            nullable: true
        },
        msg: {
            type: "text",
            nullable: true
        },
        time:{
            type: "timestamp",
            nullable: true
        },
        status: {
            type: "tinyint",
            nullable: false,
            default: 0
        },
        created_at: {
            type: "timestamp",
            nullable: false,
            default: Timestamp
        },
        updated_at: {
            type: "timestamp",
            nullable: true
        }
    }
})