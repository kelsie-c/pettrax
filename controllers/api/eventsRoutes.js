const router = require('express').Router();
const { Events } = require('../../models');

// get all events
router.get('/', async (req, res) => {
    try {
        const eventsData = await Events.findAll();
        res.status(200).json(eventsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get a single event
router.get('/:id', async (req, res) => {
    try {
        const eventsData = await Events.findByPk(req.params.id, {
            // will this include any other models or attributes?
        });
        res.status(200).json(eventsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create an event
router.post('/', async (req, res) => {
    try {
        const eventsData = await Events.create(req.body);
        res.status(200).json(eventsData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update an event
router.put('/:id', async (req, res) => {
    try {
        const eventsData = await Events.update({
            where: { id: req.params.id }
        })
        res.status(200).json(eventsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete an event
router.delete('/:id', async (req, res) => {
    try {
        const eventsData = await Events.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json(eventsData);
    } catch (err) {
        res.status(500).json(err);
    }
});