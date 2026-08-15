const db = require('../database/connection.js');

class StudentsController {
    constructor(){

    }
    consult(req, res){
        res.json({msg: 'Consulting students from class'});
    }

    consultDetail(req, res){
        const { id } = req.params;
        res.json({msg: `Consulting one student from class with id ${id}`});
    }

    input(req, res){
        res.json({msg: 'Adding students from class'});
    }

    update(req, res){
        res.json({msg: 'Update student from class'});
    }

    delete(req, res){
        res.json({msg: 'Delete student from class'});
    }
}

module.exports = new StudentsController; //Exportamos la instancia de la clase