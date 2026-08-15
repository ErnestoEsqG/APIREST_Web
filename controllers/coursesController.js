const db = require('../database/connection.js');

class CoursesController {
    constructor(){

    }
    consult(req, res){
        res.json({msg: 'Consulting courses from class'});
    }

    consultDetail(req, res){
        const { id } = req.params;
        res.json({msg: `Consulting one course from class with id ${id}`});
    }

    input(req, res){
        res.json({msg: 'Adding course from class'});
    }

    update(req, res){
        res.json({msg: 'Update course from class'});
    }

    delete(req, res){
        res.json({msg: 'Delete course from class'});
    }
}

module.exports = new CoursesController();