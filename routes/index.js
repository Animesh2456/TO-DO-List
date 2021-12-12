const express=require('express');
const router=express.Router();

const userController=require('../controller/index_controller');
console.log('loaded router');

router.get('/delete-task',userController.delete);
router.post('/add-task',userController.add);
router.get('/',userController.home);
//
//

module.exports=router;