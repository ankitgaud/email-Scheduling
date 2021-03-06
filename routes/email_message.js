var express = require('express');
var router = express.Router();
const mmm = require("../model/email");
const cron = require("node-cron")
const job_ = require("../lib/jobs/job");
const job = require('../lib/jobs/job');

cron.schedule("* * * * *", async ()=> { 
    let data = await job.find_data()
    console.log("cron trigged!")
  }); 

router.get('/list', async function (req, res) {
  try {
    return res.send({
      message: "successful",
      status: "200k",
      data: await mmm.list_email(req.query)
    });
  } catch (error) {
    throw error
  }
});

router.get('/all', async (req, res) => {
  try {
    return res.send({
      message: "successful",
      status: "200k",
      data: await mmm.fetch_message()
    });
  } catch (error) {
    throw error
  }
});

router.post('/', async (req, res) => {
  try {
    return res.send({
      status: "200k",
      message: "successful",
      data: await mmm.insert_data(req.body)
    })
  } catch (error) {
    throw error
  }
})

router.put('/', async (req, res) => {
  try {
    let data = await mmm.update_msg(req.body)
    return res.send(data)
  } catch (error) {
    throw error
  }
})

router.delete('/:id', async (req, res) => {
  try {
    let data = await mmm.delete_email(req.params)
    return res.send(data)
  } catch (error) {
    throw error
  }
})

module.exports = router;
