const router = require('express').Router();
const { Pet, User, Event } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {  
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/pet/:id', async (req, res) => {
    try {
        const petData = await Pet.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const pets = petData.map((pet) => pet.get({ plain: true }));

        res.render('menu', {
            pets,
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

router.get('/menu', withAuth, async (req, res) => {
    
    try {
        
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            // include: [ { model: Group } ],
        });
        
        const user = userData.get({ plain: true });
        console.log(user);

        res.render('menu', {
            // ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
// ----------------------------------------------------------
router.get('/dashboard', withAuth, async (req, res) => {
    
    try {
        
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Pet }],
        });
        
        const user = userData.get({ plain: true });
        // console.log(user);

        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signup', async (req, res) => {
    
    try {
        res.render('signup', {
            // ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/pets', withAuth, async (req, res) => {
    
    try {
        
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Pet }],
        });
        
        const user = userData.get({ plain: true });
        // console.log(user);

        res.render('pet', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/addpets', async (req, res) => {
    const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Pet }],
    });
    
    const user = userData.get({ plain: true });
    console.log(user);

    try {
        res.render('add-pet', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/logs', withAuth, async (req, res) => {
    
    try {

        const userData = await User.findByPk(req.session.user_id, {
            include: [{ model: Pet, include: { model: Event } }],
            attributes: { exclude: ['password'] },
        });
        
        const user = userData.get({ plain: true });

        res.render('logs', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//-------------------------------------------------------------
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

module.exports = router;