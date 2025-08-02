const express = require('express');
const router = express.Router();

const vehicleController = require('../controllers/vehicleController');

//public routes
router.get('/', vehicleController.getAllVehicles);
router.get('/:id', vehicleController.getVehicleById);
router.post('/', vehicleController.addVehicle);
router.put('/', vehicleController.updateVehicle);
router.delete('/:id', vehicleController.deleteVehicle);

module.exports = router;