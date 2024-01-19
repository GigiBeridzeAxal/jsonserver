const { default: axios } = require("axios")




const Getcontact = (req,res) =>{  



    const log = ""
    const data =  axios.get('http://localhost:3500/post')
    .then(response => {
   
   
      res.json(response.data)
    })
  
   
    
  

  }











const Postcontact = (req,res) =>{

     const {name} = req.body


     if(!name){
        res.status(400)
        throw new Error("All Fields Are Requiredh")
     }else{
        res.status(200)
      
        axios.post('http://localhost:3500/post', req.body)
      
  
     }


   
    res.json({Mes:'Hello world'})

  
  
  }

module.exports = {Getcontact , Postcontact }