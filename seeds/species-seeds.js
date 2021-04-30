const { Species } = require('../models');

const { speciesData } = [
    {
    petID: 34554,
    speciesName: "Dog"
    },
    {
    petID: 34554,
    speciesName: "Cat"
    },
]
const seedSpecies = () => Species.bulkCreate(speciesData);

module.exports = seedSpecies;