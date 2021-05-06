const { Vet } = require('../models');

const vetData = [
     {
        petId: 1,
        vetId: 1,
        vetName: "Bob Wallace",
        vetAddress: "378 Walnut Rd",
        vetPhone: 27344449876
    },
   
];

const seedVets = () => Vet.bulkCreate(vetData);

module.exports = seedVets;