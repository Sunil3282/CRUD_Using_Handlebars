const express = require('express');
const router = express.Router()
const userController = require('../controllers/userControllers')

router.get('/',userController.view);
router.get('/addUser',userController.save)
router.post('/addUser',userController.form)
router.get('/edit/:id',userController.editUser)
router.post('/update/:id',userController.updateUser)
router.get('/view/:id',userController.viewUser)
router.get('/delete/:id',userController.deleteUser)



module.exports = router;