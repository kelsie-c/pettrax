const { Event } = require('../models');

const { eventData } = [
    {
        petID: 67854,
        event: "Poop",
        time: "Date",
        ownerID: 5e4344,

    },
    {
        petID: 67854,
        event: "Pee",
        time: "Date",
        ownerID: 5e4344,

    },
    {
        petID: 67854,
        event: "Poop and Pee",
        time: "Date",
        ownerID: 5e4344,

    },
    {
        petID: 67854,
        event: "Poop",
        time: "Date",
        ownerID: 5e4344,

    },

];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;