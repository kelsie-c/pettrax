const router = require('express').Router();
const eventsRoutes = require('./eventsRoutes');
// const notificationRoutes = require('./notificationRoutes');
const petRoutes = require('./petRoutes');
const userRoutes = require('./userRoutes');

router.use('/events', eventsRoutes);
// router.use('/notifications',notificationRoutes);
router.use('/pets', petRoutes);
router.use('/users', userRoutes);

module.exports = router;