const userService = require('../services/userService');

class userController {
    async getAllUsers(req, res, next) {
        try {          
            const users = await userService.getAllUsers();

            if (users) {
                res.json({
                    success: true,
                    data: users
                });
            }

        } catch (error) {
            next(error);
        }
    }

    async getUserById(req, res, next) {
        try {
            const id = req.params.id;

            const user = await userService.getUserById(id);

            res.json({
                success: true,
                data: user
            });
                
        } catch (error) {
            next(error);
        }
    }

    async getUserEmail(req, res, next) {
        try {
            const email = req.params.email;

            const user = await userService.getUserById(email);

            res.json({
                success: true,
                data: user
            });
                
        } catch (error) {
            next(error);
        }
    }    
    
    async updateUserDetails(req, res, next) {
        try {
            
            const {id,email,address,name} = req.body;
            const user = await userService.putUserDetails(id,email,address,name);

            res.json({
                success: true,
                data: user
            });
                
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new userController();