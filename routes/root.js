const express = require('express')
const router = express.Router()
const  {Getcontact, Postcontact} = require('../controllers/contactcont')



router.route("/").get(Getcontact)
router.route("/").post(Postcontact)
module.exports = router