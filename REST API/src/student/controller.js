const pool = require('../../db');
const queries = require('./queries');

const getStudents = (req, res) => {
    // console.log('Getting Students');
    pool.query(queries.getStudents,(error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const createStudent = (req, res) => {
    const { name, email, age, dob } = req.body;
    // existing mail check
    pool.query(queries.getStudentByEmail, [email], (error, results) => {
        if (error) {
            throw error;
        }
        if (results.rows.length) {
            return res.status(409).send('Mail already exists');
        }
    });
    pool.query(queries.createStudent, [name, email, age, dob], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(201).send(`Student added with ID: ${results.insertId}`);
    });
}

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, age, dob } = req.body;
    pool.query(
        'UPDATE students SET name = $1, email = $2, age = $3, dob = $4 WHERE id = $5',
        [name, email, age, dob, id],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).send(`Student modified with ID: ${id}`);
        }
    );
};

const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM students WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Student deleted with ID: ${id}`);
    });
};

module.exports = {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
};