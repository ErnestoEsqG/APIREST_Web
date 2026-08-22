const db = require('../database/connection.js');

class StudentsController {
    constructor(){

    }
    consult(req, res){
        try{
            db.query("SELECT * FROM students",
                (err, rows) => {
                    if(err) {
                        res.status(400).send(err);
                    }
                    res.status(200).json(rows);
                });
        } catch (err) {
            res.status(500).send(err.message);
        }

    }

    consultDetail(req, res){
        const { id } = req.params;
        try{
            db.query("SELECT * FROM students WHERE id = ?", [id],
                (err, rows) => {
                    if(err) {
                        res.status(400).send(err);
                    }
                    res.status(200).json(rows[0]);
                });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    input(req, res){
        try{
            const { dni, name, lastname, email } = req.body;
            db.query("INSERT INTO courses.students\n" +
                "(id, dni, name, lastname, email)\n" +
                "VALUES(NULL, ?, ?, ?, ?);",
                [dni, name, lastname, email],(err, rows) => {
                if(err){
                    res.status(400).send(err);
                }
                res.status(201).json({ id: rows.insertId });
                });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    update(req, res){
        const { id } = req.params;
        try{
            const { dni, name, lastname, email } = req.body;
            db.query(`UPDATE courses.students 
             SET dni = ?, name = ?, lastname = ?, email = ? 
             WHERE id = ?`,
                [dni, name, lastname, email, id],(err, rows) => {
                    if(err){
                        res.status(400).send(err);
                    }
                    if(rows.affectedRows == 1)
                    res.status(200).json({  respuesta: 'Registro actualizado exitosamente'});
                });
        } catch (err) {
            res.status(500).send(err.message);
        }

    }

    delete(req, res){
        res.json({msg: 'Delete student from class'});
    }
}

module.exports = new StudentsController; //Exportamos la instancia de la clase