const login = require ('../models/login.js');
const { body, validationResult } = require('express-validator');

app.post(
  '/login',
  body('name').isString(),
  body('email').isEmail(),
  // password debe tener al menos 5 caracteres
  body('password').isLength({ min: 5 }),
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  login.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }).then(login => res.json(login));
  },
);