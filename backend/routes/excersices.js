const router = require('express').Router();
let Excersices =  require('../models/excersice.model');

router.route('/').get((req,res) => {
    Excersices.find()
        .then(excersice => res.json(excersice))
        .catch(err => res.status(400).json("Error: "+err));
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExcersice = new Excersices({
        username,
        description,
        duration,
        date,
    });

    newExcersice.save()
        .then(() => res.json("Excersice Added"))
        .catch(err => res.status(400).json("Error: "+err));
})

module.exports = router;