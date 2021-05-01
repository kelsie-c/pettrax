const { Species } = require('../models');

const speciesData = [
    {
        petId: 34554,
        speciesName: "Dog"
    },
    {
        petId: 45612,
        speciesName: "Dog"
    },
]
const seedSpecies = () => Species.bulkCreate(speciesData);

module.exports = seedSpecies;