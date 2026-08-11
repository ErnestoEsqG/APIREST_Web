const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({msg: 'Consulting students'});
})

router.post('/', (req, res) => {
    res.json({msg: 'Adding students'});
})

router.route("/:id")
    .get((req, res) => {
        res.json({msg: 'Consulting one student'});
    })
    .put((req, res) => {
        res.json({msg: 'Update student'});
    })
    .delete((req, res) => {
        res.json({msg: 'Delete student'});
    });

module.exports = router;
