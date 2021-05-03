const router = require('express').Router();
const { Event } = require('../../models');

// get all events
router.get('/', async (req, res) => {
    try {
        const eventData = await Event.findAll();
        res.status(200).json(eventData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get a single event
router.get('/:id', async (req, res) => {
    try {
        const eventData = await Event.findByPk(req.params.id, {
            // will this include any other models or attributes?
        });
        res.status(200).json(eventData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create an event
router.post('/', async (req, res) => {
    try {
        const eventData = await Event.create(req.body);
        res.status(200).json(eventData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update an event
router.put('/:id', async (req, res) => {
    try {
        const eventData = await Event.update({
            where: { id: req.params.id }
        })
        res.status(200).json(eventData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete an event
router.delete('/:id', async (req, res) => {
    try {
        const eventData = await Event.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json(eventData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;