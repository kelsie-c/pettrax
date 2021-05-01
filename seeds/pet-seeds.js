const { Pet } = require('../models');

const petData = [

    {
        name: "Scruffy",
        birthday: 04/17/3025,
        species: "Dog",
        breed: "Labrador",
        weight: 50.09,
        color: "Black",
        birthmark: "Brown Paws",
        ownerId: 2,
        groupId: 1,
    },
    {
        name: 'FurBall',
        birthday: 04/17/3025,
        species: 'Cat',
        breed: 'Maine Coon',
        weight: 50.09,
        color: 'Brown',
        birthmark: "brown spot",
        ownerId: 2,
        groupId: 1,
    },
    {
        name: 'Princess',
        birthday: 04/17/3025,
        species: 'Dog',
        breed: 'Chihuaha',
        weight: 50.09,
        color: 'Tan',
        birthmark: "Little Tail",
        ownerId: 2,
        groupId: 1,
    },
    {
        name: 'Tut',
        birthday: 04/17/3025,
        species: 'Cat',
        breed: 'Sphynx',
        weight: 50.09,
        color: 'None',
        birthmark: "Marker",
        ownerId: 2,
        groupId: 1,
    },
    {
        name: 'Barkey',
        birthday: 04/17/3025,
        species: 'Dog',
        breed: "Golden Retriever",
        weight: 50.09,
        color: 'Golden',
        birthmark: 'Bark',
        ownerId: 2,
        groupId: 1, 
    },
   
];
    const seedPets = () => Pet.bulkCreate(petData);
    
    
    module.exports = seedPets;




