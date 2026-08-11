const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({msg: 'Consulting professors'});
})

router.post('/', (req, res) => {
    res.json({msg: 'Adding professors'});
})

router.route("/:id")
    .get((req, res) => {
        res.json({msg: 'Consulting one professor'});
    })
    .put((req, res) => {
        res.json({msg: 'Update professor'});
    })
    .delete((req, res) => {
        res.json({msg: 'Delete professor'});
    });

module.exports = router;