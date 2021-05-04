const router = require('express').Router();
const { Species } = require('../../models');

// get all species
router.get('/', async (req, res) => {
    try {
        const speciesData = await Species.findAll();
        res.status(200).json(speciesData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get a single species
router.get('/:id', async (req, res) => {
    try {
        const speciesData = await Species.findByPk(req.params.id, {
            // will this include any other models or attributes?
        });
        res.status(200).json(speciesData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create a species
router.post('/', async (req, res) => {
    try {
        const speciesData = await Species.create(req.body);
        res.status(200).json(speciesData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update a species
router.put('/:id', async (req, res) => {
    try {
        const speciesData = await Species.update(req.body, {
            where: { id: req.params.id }
        })
        res.status(200).json(speciesData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete a species
router.delete('/:id', async (req, res) => {
    try {
        const speciesData = await Species.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json(speciesData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;