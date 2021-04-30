const router = require('express').Router();
const { Vet } = require('../../models');

// get all vets
router.get('/', async (req, res) => {
    try {
        const vetData = await Vet.findAll();
        res.status(200).json(vetData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get a single vet
router.get('/:id', async (req, res) => {
    try {
        const vetData = await Vet.findByPk(req.params.id, {
            // will this include any other models or attributes?
        });
        res.status(200).json(vetData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create a new vet
router.post('/', async (req, res) => {
    try {
        const vetData = await Vet.create(req.body);
        res.status(200).json(vetData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update a vet
router.put('/:id', async (req, res) => {
    try {
        const vetData = await Vet.update({
            where: { id: req.params.id }
        })
        res.status(200).json(vetData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete a vet
router.delete('/:id', async (req, res) => {
    try {
        const vetData = await Vet.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json(vetData);
    } catch (err) {
        res.status(500).json(err);
    }
});