const router = require('express').Router();
const { Pet } = require('../../models');

// get all pets
router.get('/', async (req, res) => {
    try {
        const petData = await Pet.findAll();
        res.status(200).json(petData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get a single pet
router.get('/:id', async (req, res) => {
    try {
        const petData = await Pet.findByPk(req.params.id, {
            // will this include any other models or attributes?
        });
        res.status(200).json(petData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create a new pet
router.post('/', async (req, res) => {
    try {
        const petData = await Pet.create(req.body);
        res.status(200).json(petData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update a pet
router.put('/:id', async (req, res) => {
    try {
        const petData = await Pet.update({
            where: { id: req.params.id }
        })
        res.status(200).json(petData);
    } catch (err) {
        res.status(500).json(err);
    }  
});

// delete a pet
router.delete('/:id', async (req, res) => {
    try {
        const petData = await Pet.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json(petData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;