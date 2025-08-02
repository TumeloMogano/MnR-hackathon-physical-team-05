const vehicleService = require('../services/vehicleService');

class VehicleController {
    async getAllVehicles (req, res, next) {

        try {
            const vehicles = await vehicleService.getAllVehicles();

            res.status(200).json({
                success: true,
                data: vehicles
            });

        } catch (error) {
            next(error);
        }
    }

    async getVehicleById (req, res, next) {

        try {
            const id = req.params.id;
            const vehicle = await vehicleService.getVehicleById(id);

            res.status(200).json({
                success: true,
                data: vehicle
            })
        } catch (error) {
            next(error);
        }
    }

    async addVehicle (req, res, next) {

        try {
            //get request body a.k.a payload
            const vehicleData = req.body;
            const newVehicle = await vehicleService.addVehicle(vehicleData);

            res.status(201).json({
                success: true,
                message: 'Vehicle added successfully.',
                data: newVehicle
            });
        } catch (error) {
            next(error);
        }
    }

    async updateVehicle(req, res, next) {
        try {
            
            const {id,make, model, registration, driver} = req.body;
            const vehicle = await vehicleService.updateVehicle(id, make, model, registration, driver);

            res.json({
                success: true,
                data: vehicle
            });
                
        } catch (error) {
            next(error);
        }
    }

    async deleteVehicle (req, res, next) {

        try {
            //get id of record to delete
            const id = req.params.id;
            await vehicleService.deleteVehicle(id); 

            res.status(200).json({
                success: true,
                message: 'Vehicle deleted successfully.'
            });

        } catch (error) {
            next(error);
        }
    }

    async Schedule (req, res, next) {

        try {
            //get request body a.k.a payload
            const Data = req.body;
            const scheduleData = await vehicleService.addSchedule(Data);

            res.status(201).json({
                success: true,
                message: 'Schedule added successfully.',
                data: scheduleData
            });
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new VehicleController();