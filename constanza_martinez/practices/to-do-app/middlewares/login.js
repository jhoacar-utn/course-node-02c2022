const { body, validationResult } = require('express-validator');

module.exports.validateRegistration = (req, res, next) => {
  
  const result = validateRequest(req);

  if (result?.errors) {

    return res.status(400).json ({

      errors: result.errors

    })
  }

  return next();
}

/**
* Funcion encargada de validar la request y asegurarse que la informacion venga correctamente
* Devuelve un objeto con el campo '.errors', con los errores que existan
* En otro caso devolvera un 'null'
* Esta funcion esta implementa usando express-validator.
*/

function validateRequest(req){

  const rules = [

        body('name').isLength({ min: 1}),

        body('email').isEmail(),

        body('password').isLength({ min: 5}),

    ]

    rules.map( (middlewareFunction) => {
      
      middlewareFunction(req);
    
    })
    
    const errors = validationResult(req);

    if (!errors.isEmpty() ) {
      return {
        errors: errors.array()
      }
    } 
    return {
      errors: null
    };
}