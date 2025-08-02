const data = require('../../config/database');

class userService {
    async getAllUsers() {
        const query = 'SELECT * FROM "User" ORDER BY id ASC';
        const result = await data.query(query);
        return result.rows;
    }

    async getUserById(id) {
        const query = {
            text: 'SELECT * FROM "User" WHERE id = $1',
            values: [id]
        };

        const result = await data.query(query);

        if (result.rows.length === 0) {
            throw new Error('User not found');
        }

        return result.rows[0];
    }

    async getUserByEmail(email) {
        const query = {
            text: 'SELECT * FROM "User" WHERE email = $1',
            values: [email]
        };

        const result = await data.query(query);

        if (result.rows.length === 0) {
            throw new Error('User not found');
        }

        return result.rows[0];
    }

    
    async putUserDetails(id,email,address,name) {

        const query = {
            text: 'UPDATE "User" SET email = $2, address = $3, name = $4 WHERE id = $1 Returning *',
            values: [id,email,address,name]
        };

        try {
            const result = await data.query(query);
    
            return result.rows;
        } catch (error) {
            if (error.code === '23505') {
                return { error: 'User already registered.' };
            }

        return result.rows;
    }
}
    
}

module.exports = new userService();