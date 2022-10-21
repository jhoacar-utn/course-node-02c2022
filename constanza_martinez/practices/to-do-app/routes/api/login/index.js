const express = require ('express');

const router = express.Router();

const { create } = require ('../../../controllers/login')

const { validateRegistration } = require ('../../../middlewares/login');

router.post('/login', validateRegistration, create);

module.exports = router;