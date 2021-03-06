const { getConnection } = require('typeorm');
const moment = require('moment');
const Message = require("../classModel/messageClass").Message;

const list_email = async (payload) => {
    try {
        var obj = ((payload.time == "") ? `msg.status = "${payload.status}"` : `msg.status = "${payload.status}" and msg.time like '%${payload.time}%'`);

        let data = await getConnection()
            .getRepository(Message)
            .createQueryBuilder("msg")
            .where(obj)
            .select()
            .getMany();

        return data
    } catch (error) {
        throw error
    }
}

const fetch_message = async () => {
    try {
        let data = await getConnection()
            .getRepository(Message)
            .createQueryBuilder("msg")
            .getMany();

        return data
    } catch (error) {
        throw error;
    }
}

const insert_data = async (payload) => {
    let obj = {
        email: payload.receiver_email,
        msg: payload.msg,
        time: payload.time
    }
    let data = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Message)
        .values(obj)
        .execute()

    return data
}

const update_msg = async (payload) => {
    try {
        let obj = {
            email: payload.receiver_email,
            msg: payload.msg,
            time: payload.time
        }
        let data = await getConnection()
            .createQueryBuilder()
            .update(Message)
            .set(obj)
            .where("status = 0 and id = :id", {
                id: payload.id
            })
            .execute()

        return data;
    } catch (error) {
        throw error
    }
}

const delete_email = async (payload) => {
    try {
        let data = await getConnection()
            .createQueryBuilder()
            .update(Message)
            .set({ "status": "4" })
            .where(`id = "${payload.id}"`)
            .execute()

        return data;
    } catch (error) {
        throw error
    }
}

const mail_sent = async (id, status) => {
    try {
        let data = await getConnection()
            .createQueryBuilder()
            .update(Message)
            .set({ "status": status })
            .where(`id = "${id}"`)
            .execute()

        return data;
    } catch (error) {
        throw error
    }
}

const list_for_mail = async (payload) => {
    try {
        payload = `${payload.slice(0, 10)} ${payload.slice(11, 16)}`;
        let data = await getConnection()
            .getRepository(Message)
            .createQueryBuilder("msg")
            .where(`msg.status = "0" and msg.time like '%${payload}%'`)
            .select()
            .getMany();

        return data
    } catch (error) {
        throw error
    }
}

module.exports = {
    list_for_mail,
    mail_sent,
    list_email,
    fetch_message,
    insert_data,
    update_msg,
    delete_email
}
