const express = require('express');
const router = express.Router();
const DogModel = require('../models/dogs');

/*
Create = POST
Read = GET
Update = PUT (PATCH)
Delete = DELETE
*/
/* Reads */
router.get('/', async (req, res, next) => {
    let dogs;
    dogs = await DogModel.find();
    res.json({ dogs });
});

/* Edit */
router.put('/', (req, res, next) => {

})

/* Create */
router.post('/', async (req, res, next) => {
    console.log(req.body);
    const dog = DogModel({
        size: req.body.size,
        breed: req.body.breed,
        weight: req.body.weight,
        age: req.body.age,
        color: req.body.color
    });
    try {
        const newDog = await dog.save();
        res.status(201).json(newDog);
    } catch (err) {
        res.status(400)({ message: err.message });
    }
});
/* Remove */
router.delete('/', (req, res, next) => {

})

module.exports = router;
