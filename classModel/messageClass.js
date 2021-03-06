class Message{
    constructor(
        id,
        email,
        msg,
        time,
        status,
        created_at,
        updated_at
    ){
        this.id = id;
        this.email = email;
        this.msg = msg;
        this.time = time;
        this.status = status;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}

module.exports = {
    Message: Message
}