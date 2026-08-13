class ProfessorsController {
    constructor(){

    }
    consult(req, res){
        res.json({msg: 'Consulting professors from class'});
    }

    consultDetail(req, res){
        res.json({msg: 'Consulting one professor from class'});
    }

    input(req, res){
        res.json({msg: 'Adding professor from class'});
    }

    update(req, res){
        res.json({msg: 'Update professor from class'});
    }

    delete(req, res){
        res.json({msg: 'Delete professor from class'});
    }
}

module.exports = new ProfessorsController; //Exportamos la instancia de la clase