const router = require('express').Router();
const eventsRoutes = require('./eventsRoutes');
const ICERoutes = require('./ICERoutes');
const notificationRoutes = require('./notificationRoutes');
const petRoutes = require('./petRoutes');
const speciesRoutes = require('./speciesRoutes');
const userRoutes = require('./userRoutes');
const vetRoutes = require('./vetRoutes');

router.use('/events', eventsRoutes);
router.use('/ice', ICERoutes);
router.use('/notifications',notificationRoutes);
router.use('/pets', petRoutes);
router.use('/species', speciesRoutes);
router.use('/users', userRoutes);
router.use('/vets', vetRoutes);

module.exports = router;