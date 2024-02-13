const getStudents = "SELECT * FROM students ORDER BY id ASC";
const getStudentById = "SELECT * FROM students WHERE id = $1";
const getStudentByEmail = "SELECT s FROM students s WHERE s.email = $1";
const createStudent = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4) RETURNING id";
const updateStudent = "UPDATE students SET name = $1, email = $2, age = $3, dob = $4 WHERE id = $5";
const deleteStudent = "DELETE FROM students WHERE id = $1";

module.exports = {
    getStudents,
    getStudentById,
    getStudentByEmail,
    createStudent,
    updateStudent,
    deleteStudent,
};