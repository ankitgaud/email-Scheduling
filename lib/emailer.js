const nodemailer = require('nodemailer');
require('dotenv').config()
const mmm = require("../model/email")

const send_email = async (payload) => {
    try {
        const smtpTransport = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_AUTH_USER,
                pass: process.env.MAIL_AUTH_PASS
            }
        });

        payload.forEach(function (to, i, array) {

            let mailOptions = {
                from: 'bigapp@gmail.com',
                subject: 'subject',
                text: 'I am a testing case.',
                attachments: [],
                html: ``
            };
            mailOptions.to = to.email;

            smtpTransport.sendMail(mailOptions, function (err) {
                if (err) {
                    console.log('Sending to ' + to + ' failed: ' + err);
                    mmm.mail_sent(to.id, 2)
                    return "error";
                } else {
                    console.log('Sent to ' + to.email);
                    mmm.mail_sent(to.id, 1)
                }

                if (i === clientData2.length - 1) { msg.transport.close(); }
            });
        });

        return "data"
    } catch (error) {
        throw error
    }
}

module.exports = { send_email };