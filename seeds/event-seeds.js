    const { Event } = require('../models');

    const eventData = [
        {
            petId: 1,
            eventType: "Pee",
            time: "22:14",
        },
        {
            petId: 1,
            eventType: "Pee",
            time: "18:56",
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
    