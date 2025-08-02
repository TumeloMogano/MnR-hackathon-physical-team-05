const data = require('../../config/database');

class VehicleService {
    async getAllVehicles() {
        const query = 'SELECT * FROM "Vehicle" ORDER BY id ASC';
        const result = await data.query(query);
        return result.rows;
    }

    async getVehicleById(id) {
        const query = {
            text: 'SELECT * FROM "Vehicle" WHERE id = $1',
            values: [id]
        }

        const result = await data.query(query);

        if (result.rows.length === 0) {
            throw new Error('Vehicle not found.');
        }

        return result.rows[0];
    }

    async addVehicle(vehicleData) {
        const query = {
            text: `INSERT INTO "Vehicle" (make, model, registration, driver)
                    VALUES ($1, $2, $3, $4)
                    RETURNING *`,
            values: [
                vehicleData.make,
                vehicleData.model,
                vehicleData.registration,
                vehicleData.driver
            ]
        }
        

        const result = await data.query(query);
        return result.rows[0];
        
    }

        async updateVehicle(id,make, model, registration, driver) {

        const query = {
            text: 'UPDATE "Vehicle" SET make = $2, model = $3, registration = $4, driver = $5 WHERE id = $1 Returning *',
            values: [id, make, model, registration, driver]
        };

        try {
            const result = await data.query(query);
    
            return result.rows;
        } catch (error) {
            if (error.code === '23505') {
                return { error: 'Unable to update vehicle.' };
            }

        return result.rows;
    }
}

    async deleteVehicle(id) {
        const locate = {
            text: 'SELECT * FROM "Vehicle" WHERE id = $1',
            values: [id]
        }


        if ((await data.query(locate)).rows.length === 0) {
            console.log('Vehicle not found.');
            throw new Error('Vehicle not found.');    
        }

        console.log('Vehicle Located!!');

        const query = {
            text: `DELETE FROM "Vehicle" WHERE id = $1
                    RETURNING *`,
            values: [id]
        }

        const result = await data.query(query);
        return result.rows[0];
        

    }
    
}

module.exports = new VehicleService();