const express = require('express');
const cors = require('cors');
const app = express();
const studentRoutes = require('./routes/studentsRoutes.js');
const professorsRoutes = require('./routes/professorsRoutes.js');

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/students", studentRoutes);
app.use("/professors", professorsRoutes);

app.listen(3000,() =>{
    console.log('Server started on port 3000')
});