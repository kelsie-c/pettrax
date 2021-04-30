const { Notification } = require('../models');

const { notificationData } = [
    {
    petID: 34554,
    bathroomRemind: "...",
    bathroomTime: 8763839030,
    foodRemind: "...",
    foodTime: "...",
    }


]

const seedNotifications = () => Notification.bulkCreate(notificationData);

module.exports = seedNotifications;