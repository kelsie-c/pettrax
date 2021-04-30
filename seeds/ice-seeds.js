const { ICE } = require('../models');

const { iceData } = [
    {
    groupID: 34554,
    contactName: "Bob Wallace",
    contactPhone: 8763839030,
    },
    {
    groupID: 34554,
    contactName: "John Smith",
    contactPhone: 878970000
    },

];

const seedIces = () => ICE.bulkCreate(iceData);

module.exports = seedIces;