const express = require('express')
const router = express.Router()
const TemperatureSchema = require('../models/Temperature')
const UserSchema = require('../models/Users')

//PARA VALIDAR A REQUISIÇÃO
const expressValidator = require('express-validator')
const auth = require('../middlewares/auth')

const validate = [
    expressValidator.check('temperature').isLength({min: 1}).withMessage("Campo temperatura tem que ter o tamanho maior ou igual a 1"),
    expressValidator.check('temperature').isNumeric().withMessage("Field temperature should be a number")
]

//GET ALL - TUDO
router.get('/', auth, (req, res) => {
    TemperatureSchema.find()
    .then(temperatures => {
        res.status(200).send(temperatures);
    })
    .catch(err => {
        res.status(400).send(err)
    })
});

router.get('/:id', (req, res) => {
    TemperatureSchema.findById(req.params.id)
    .then(temperature => {
        res.status(200).send(temperature);
    })
    .catch(err => {
        res.status(400).send(err)
    })
})

//CREATE REQUEST - POST
router.post('/', [validate], (req, res) => {

    //VALIDA SE HA ERROS NA REQUISIÇÃO
    const erros = expressValidator.validationResult(req);
    if(!erros.isEmpty()){
        return res.status(422).send({erros: erros.array()});
    }

    const temperatureSchema = new TemperatureSchema({
            temperature: req.body.temperature
    })
   
    temperatureSchema.save()    
    .then(result => {
        console.log(result)
        res.status(201).send();
    }).catch(err => {
        consolge.log(err)
        res.status(400).send()
    })
    
});

router.delete('/', (req, res) => {
    
    TemperatureSchema.deleteMany().then(result => {
        res.status(200).send()
    });
})

//DELETE BY ID
router.delete('/query', (req, res) => {
    const queryId = req.query.id

    TemperatureSchema.findByIdAndDelete(queryId)
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(err)
            res.status(400).send()
        })
})

//PUT EDITAR ITEM
router.put('/:value', (req, res) => {
    const pathValue = req.params.value
    const queryId = req.query.id

    TemperatureSchema.findByIdAndUpdate (queryId, { temperature: pathValue })
        .then(result => {
            res.status(200).send()
        })
        .catch(err => {
            res.status(400).send()
        })

});

module.exports = router;

