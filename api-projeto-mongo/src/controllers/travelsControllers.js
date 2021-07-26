const travels = require("../models/travels");

const createTravel = (req, res) => {
    let travel = new travels(req.body)
    travel.save(function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(201).send(travel.toJSON())
    })
}

const getAllTravels = (req, res) => {
    //Find sempre retorna uma lista
    travels.find(function (err, travelsFound) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        if (travelsFound && travelsFound.length > 0) {
            res.status(200).send(travelsFound);
        } else {
            res.status(204).send();
        }
    })
};

const getTravelById = (req, res) => {
    const resquestId = req.params.id;
    //FindOne retorna um unico documento
    travels.findOne({ id: resquestId }, function (err, travelFound) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        if (travelFound) {
            res.status(200).send(travelFound);
        } else {
            res.status(204).send();
        }
    })
};


module.exports = {
    createTravel,
    getAllTravels,
    getTravelById
}