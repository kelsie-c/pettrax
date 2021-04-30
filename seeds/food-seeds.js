const { Food } = require('../models');

const { foodData } = [

    {
        petID: 67854,
        time: "Date",
        ownerID: 5e4344,

    },
    {
        petID: 67854,
        time: "Date",
        ownerID: 5e4344,

    },
    {
        petID: 67854,
        time: "Date",
        ownerID: 5e4344,

    },
    {
        petID: 67854,
        time: "Date",
        ownerID: 5e4344,

    },
];


const seedFoods = () => Food.bulkCreate(foodData);

module.exports = seedFoods;