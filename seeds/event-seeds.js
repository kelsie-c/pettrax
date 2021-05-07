    const { Event } = require('../models');

    const eventData = [
        {
            petId: 1,
            eventType: "Poop",
            time: "Date",
        },
        {
            petId: 2,
            eventType: "Pee",
            time: "Date",
        },
        {
            petId: 3,
            eventType: "Poop and Pee",
            time: "Date",
        },
        {
            petId: 4,
            eventType: "Poop",
            time: "Date",
        },
    ];
    
    const seedEvents = () => Event.bulkCreate(eventData);
    
    module.exports = seedEvents;
    