const router = require('express').Router();
const { Group } = require('../../models');

// get all groups
router.get('/', async (req, res) => {
    try {
        const groupData = await Group.findAll();
        res.status(200).json(groupData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get a single group
router.get('/:id', async (req, res) => {
    try {
        const groupData = await Group.findByPk(req.params.id, {
            // will this include any other models or attributes?
        });
        res.status(200).json(groupData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create a group
router.post('/', async (req, res) => {
    try {
        const groupData = await Group.create(req.body);
        res.status(200).json(groupData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update a group
router.put('/:id', async (req, res) => {
    try {
        const groupData = await Group.update({
            where: { id: req.params.id }
        })
        res.status(200).json(groupData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete a group
router.delete('/:id', async (req, res) => {
    try {
        const groupData = await Group.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json(groupData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;