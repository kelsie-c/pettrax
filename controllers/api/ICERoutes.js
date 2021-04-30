const router = require('express').Router();
const { ICE } = require('../../models');

// get all ICEs
router.get('/', async (req, res) => {
    try {
        const iceData = await ICE.findAll();
        res.status(200).json(iceData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get a single ICE
router.get('/:id', async (req, res) => {
    try {
        const iceData = await ICE.findByPk(req.params.id, {
            // will this include any other models or attributes?
        });
        res.status(200).json(iceData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create a new ICE
router.post('/', async (req, res) => {
    try {
        const iceData = await ICE.create(req.body);
        res.status(200).json(iceData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update an ICE
router.put('/:id', async (req, res) => {
    try {
        const iceData = await ICE.update({
            where: { id: req.params.id }
        })
        res.status(200).json(iceData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete an ICE
router.delete('/:id', async (req, res) => {
    try {
        const iceData = await ICE.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json(iceData);
    } catch (err) {
        res.status(500).json(err);
    }
});