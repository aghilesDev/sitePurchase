const express = require('express');
const userCtrl = require('../controllers/user');



router = express.Router();

router.post('/signup',userCtrl.signUp);
router.post('/login',userCtrl.login);

module.exports=router;
