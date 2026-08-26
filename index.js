const express = require('express');
const cors = require('cors');
const app = express();
const studentRoutes = require('./routes/studentsRoutes.js');
const professorsRoutes = require('./routes/professorsRoutes.js');
const coursesRoutes = require('./routes/coursesRoutes.js');

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/students", studentRoutes);
app.use("/professors", professorsRoutes);
app.use("/courses", coursesRoutes);

app.listen(3000,() =>{
    console.log('Server started on port 3000')
});