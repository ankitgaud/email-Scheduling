const moment = require('moment');
const mmm = require("../../model/email")
const emailer_ = require("../../lib/emailer");
const email = require('../../model/email');

const find_data = async ()=>{
    try{
        let today = moment();
        let data = await mmm.list_for_mail(today.format())
        await emailer_.send_email(data)
        return
    }catch(error){
        throw error
    }
}

module.exports = {
    find_data
}