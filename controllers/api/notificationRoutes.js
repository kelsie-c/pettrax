const router = require('express').Router();
const { Notification } = require('../../models');

// get all notifications
router.get('/', async (req, res) => {
    try {
        const notificationData = await Notification.findAll();
        res.status(200).json(notificationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get a single notification
router.get('/:id', async (req, res) => {
    try {
        const notificationData = await Notification.findByPk(req.params.id, {
            // will this include any other models or attributes?
        });
        res.status(200).json(notificationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create a new notification
router.post('/', async (req, res) => {
    try {
        const notificationData = await Notification.create(req.body);
        res.status(200).json(notificationData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update a notification
router.put('/:id', async (req, res) => {
    try {
        const notificationData = await Notification.update({
            where: { id: req.params.id }
        })
        res.status(200).json(notificationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete a notification
router.delete('/:id', async (req, res) => {
    try {
        const notificationData = await Notification.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json(notificationData);
    } catch (err) {
        res.status(500).json(err);
    }
});