const { ICE } = require('../models');

const iceData = [
    {
    groupId: 34554,
    contactRelationship: "brother",
    contactName: "Bob Wallace",
    contactPhone: 8763839030,
    },
    {
  
    groupId: 45698,
    contactRelationship: "uncle",
    contactName: "John Smith",
    contactPhone: 878970000
    },

];

const seedIces = () => ICE.bulkCreate(iceData);

module.exports = seedIces;