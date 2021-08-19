const express = require ('express');

const router = express.Router();

const mainControllers = require('../controllers/mainControllers.js');


// router
router.get('/', mainControllers.index);
router.get('/chisiamo', mainControllers.chiSiamo);
router.get('/eventi', mainControllers.eventi);
router.get('/cataloghi', mainControllers.cataloghi);
router.get('/brunchAfternoon', mainControllers.brunchAfternoon);
router.get('/shop', mainControllers.shop);
router.get('/contatto', mainControllers.contatto);

module.exports = router;