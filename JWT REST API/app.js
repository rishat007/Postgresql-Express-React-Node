require('dotenv').config();
const express = require('express');
// const studentRoutes = require('./src/student/routes');

const app = express();

// app.get('/api', (req, res) => {
//     res.json({
//         success: 1,
//         message: 'This is a REST API'
//     });
// });

const userRouter = require('./api/users/user.router');
app.use(express.json());
app.use('/api/users', userRouter);

app.listen(process.env.APP_PORT, () => {
    console.log('Server running on port :',process.env.APP_PORT);
});