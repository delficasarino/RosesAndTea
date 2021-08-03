const express = require ('express');

const router = express.Router();

const mainControllers = require('../controllers/mainControllers.js');


// router
router.get('/', mainControllers.index);

module.exports = router;