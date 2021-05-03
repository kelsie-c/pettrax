const router = require('express').Router();
const { Pet, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {   //not sure if petData should be used below and newPet in petRoutes
        const petData = await Pet.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const pets = petData.map((pet) => pet.get({ plain: true }));

        res.render('homepage', {
            pets,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/pet/:id',async (req, res) => {
    try {
        const petData = await Pet.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const pet = petData.get({ plain: true });

        res.render('pet', {
            ...pet,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Pet }],
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

module.exports = router;