const express = require('express');
const stuffCtrl=require('../controllers/stuff');
const auth = require('../middleware/auth');
const multer_config = require('../middleware/multer-config');

const router=express.Router();




router.post('/',auth, multer_config,stuffCtrl.createThing);



router.get('/:id',auth,stuffCtrl.getOneThing );

router.get('/',auth,stuffCtrl.getAllthings);


router.put('/:id',auth, stuffCtrl.modifyThing);


router.delete('/:id',auth, stuffCtrl.deleteThing);

module.exports=router;
