const express = require('express')

const router = express.Router()
const {getContact , createContact, updateContact, deleteContact, getContactbyid } = require('../controllers/contactController')


router.route("/").get(getContact)
router.route("/").post(createContact)
  router.route("/:id").get(getContactbyid)
  router.route("/:id").put(createContact)
  router.route("/:id").delete(deleteContact)



  
module.exports = router