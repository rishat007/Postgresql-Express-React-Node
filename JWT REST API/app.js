require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./api/users/user.router');

// const studentRoutes = require('./src/student/routes');

// app.get('/api', (req, res) => {
//     res.json({
//         success: 1,
//         message: 'This is a REST API'
//     });
// });

app.use(express.json());
app.use('/api/users', userRouter);

app.listen(process.env.APP_PORT, () => {
    console.log('Server running on port :',process.env.APP_PORT);
});