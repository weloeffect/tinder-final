const express = require('express');
const router = express.Router();
const {addCard, getCard} =  require('../controller/card')

router.post('/create',addCard )


router.get('/view',getCard )


module.exports = router;