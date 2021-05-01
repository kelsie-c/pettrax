const { Vet } = require('../models');

const vetData = [
     {
        petId: 45612,
        vetId: 34554,
        vetName: "Bob Wallace",
        vetAddress: "378 Walnut Rd",
        vetPhone: 27344449876
    },
   
];

const seedVets = () => Vet.bulkCreate(vetData);

module.exports = seedVets;