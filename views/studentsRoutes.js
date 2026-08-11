const express = require('express');
const router = express.Router();

router.get('/students', (req, res) => {
    res.json({msg: 'Consulting students'});
})

router.post('/students', (req, res) => {
    res.json({msg: 'Adding students'});
})

router.put('/students', (req, res) => {
    res.json({msg: 'Update students'});
})

router.delete('/students', (req, res) => {
    res.json({msg: 'Deleting students'});
})


