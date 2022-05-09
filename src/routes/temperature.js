const express = require('express')
const router = express.Router()
const TemperatureSchema = require('../models/Temperature')
const jwt = require('jsonwebtoken')

//PARA VALIDAR A REQUISIÇÃO
const expressValidator = require('express-validator')
const auth = require('../middlewares/auth')
const verifyJWT = require('../middlewares/verifyJWT')

const SECRET = "lucas"

const validate = [
    expressValidator.check('temperature').isLength({min: 1}).withMessage("Campo temperatura tem que ter o tamanho maior ou igual a 1"),
    expressValidator.check('temperature').isNumeric().withMessage("Field temperature should be a number")
]

//GET ALL - TUDO
router.get('/', verifyJWT, (req, res) => {
    TemperatureSchema.find()
    .then(temperatures => {
        console.log(req.userId + ' fez esta chamada!');
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
router.post('/', verifyJWT, [validate], (req, res) => {

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

router.post('/login', auth, (req, res) => {
    TemperatureSchema.find()
    .then(temperatures => {
        const token = jwt.sign({ userId: 1}, SECRET, { expiresIn: 300 })
        res.json({ auth: true, token });
    })
    .catch(err => {
        res.status(400).send(err)
    })
})

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

