const {constants} = require('../constants')

const errorhandler = ( err, req,res,next) => {
  const statuscode = res.status ? res.statuscode : 500

 switch (statuscode) {
    case constants.VALIDATION_ERROR:
        res.json({ tittle: "Validation Failed", message: err.message, stacktrace: err.stack})
        break;
        case constants.NOT_FOUND:
            res.json({ tittle: "Not Found", message: err.message, stacktrace: err.stack})
  

        break

 
 }

 

    
}



module.exports = errorhandler