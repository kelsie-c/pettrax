const { Vet } = require('../models');

const { vetData } = [
     {
    vetID: 34554,
    vetName: "Bob Wallace",
    vetAddress: "378 Walnut Rd",
    vetPhone: 27344449876

    },
   
];

const seedVets = () => Notification.bulkCreate(notificationData);

module.exports = seedVets;