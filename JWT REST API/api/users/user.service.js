const pool = require('../../config/db');

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO students (name, email, password) VALUES ($1, $2, $3) RETURNING id`,
            [data.name, data.email, data.password], 
            (error, results) => {
                if (error) {
                    return callBack(error); // Pass the error to the callback
                }
                return callBack(null, results.rows[0].id);
            }
        );
    },

    getUsers: (callBack) => {
        pool.query(
            `SELECT * FROM students ORDER BY id ASC`,
            [],
            (error, results) => {
                if (error) {
                    return callBack(error); // Pass the error to the callback
                }
                return callBack(null, results.rows);
            }
        );
    },

    getUserById: (id, callBack) => {
        pool.query(
            `SELECT * FROM students WHERE id = $1`,
            [id],
            (error, results) => {
                if (error) {
                    return callBack(error); // Pass the error to the callback
                }
                return callBack(null, results.rows[0]);
            }
        );
    },

    updateUser: (data, callBack) => {
        pool.query(
            `UPDATE students SET name = $1, email = $2, password = $3 WHERE id = $4`,
            [data.name, data.email, data.password, data.id],
            (error) => {
                if (error) {
                    return callBack(error); // Pass the error to the callback
                }
                return callBack(null, "User updated successfully");
            }
        );
    },

    deleteUser: (id, callBack) => {
        pool.query(
            `DELETE FROM students WHERE id = $1`,
            [id],
            (error) => {
                if (error) {
                    return callBack(error); // Pass the error to the callback
                }
                return callBack(null, "User deleted successfully");
            }
        );
    },

    getUserByEmail: (email, callBack) => {
        pool.query(
            `SELECT * FROM students WHERE email = $1`,
            [email],
            (error, results) => {
                if (error) {
                    return callBack(error); 
                }
                if (results.rows.length === 0) {
                    return callBack(null, null); 
                }
                return callBack(null, results.rows[0]);
            }
        );
    }
};