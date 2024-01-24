const asynchandler = require('express-async-handler')
const maincontact = require('../models/contactmododel')


const getContact = asynchandler( async (req,res) => {
  const contacts = await maincontact.find()
    res.status(200).json({contacts})
  
  
  })
  const createContact = asynchandler( async  (req,res) =>{
    console.log(req.body)
    const {name, email, phone} = req.body

    if(!name || !email || !phone){
      res.status(400)
      throw new Error("All Validation required")
    }
    const contactmake = await maincontact.create({
      name,
      email,
      phone
    }) 
    res.status(200).json(contactmake)
  
  
  }) 
   const getContactbyid = asynchandler( async (req,res) =>{
    console.log(req.params.id)
     const getcontact =  await maincontact.findById(req.params.id)

     if(!getcontact){
      res.status(404)
      throw new Error("Contact Not Found")
     }



    res.status(200).json(getcontact)
  
  
  })


  const updateContact = asynchandler( async (req,res) =>{

    const updatedcontact = await maincontact.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true}
    )

    res.status(200).json(updatedcontact)
  
  
  })
  const deleteContact = asynchandler( async (req,res) =>{
    res.status(200).json({message:`Delete Contact For ${req.params.id}`})
  
  
  })

  module.exports = {getContact , createContact , updateContact, deleteContact , getContactbyid }