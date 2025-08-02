const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Public routes
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.get('/:email',userController.getUserEmail);

router.put('/update-user',userController.updateUserDetails);

module.exports = router;