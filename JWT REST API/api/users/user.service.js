const pool = require('../../config/db');

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO students (name, email, password) VALUES ($1, $2, $3) RETURNING id`,
            [
                data.name,
                data.email,
                data.password
            ], 
            (error, results, fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUsers: (callBack) => {
        pool.query(
            `SELECT * FROM students ORDER BY id ASC`,
            [],
            (error, results, fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUserById: (id, callBack) => {
        pool.query(
            `SELECT * FROM students WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateUser: (data, callBack) => {
        pool.query(
            `UPDATE students SET name = $1, email = $2, password = $3 WHERE id = $4`,
            [
                data.name,
                data.email,
                data.password,
                data.id
            ],
            (error, results, fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteUser: (data, callBack) => {
        pool.query(
            `DELETE FROM students WHERE id = ?`,
            [data.id],
            (error, results, fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUserByEmail: (email, callBack) => {
        pool.query(
            `SELECT * FROM students WHERE email = ?`,
            [email],
            (error, results, fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }


}