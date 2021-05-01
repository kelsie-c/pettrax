const { Pet } = require('../models');

const { petData } = [

    {
        name: 'Scruffy',
        birthday: 04/17/3025,
        species: 'Dog',
        breed: 'Labrador',
        weight: 50.09,
        color: 'Black',
        birthmark: 'Brown Paws',
        ownerID: [0],
        groupID: [0],
    },
    {
        name: 'FurBall',
        birthday: 04/17/3025,
        species: 'Cat',
        breed: 'Maine Coon',
        weight: 50.09,
        color: 'Brown',
        birthmark: 'brown spot',
        ownerID: [0],
        groupID: [0],
    },
    {
        name: 'Princess',
        birthday: 04/17/3025,
        species: 'Dog',
        breed: 'Chihuaha',
        weight: 50.09,
        color: 'Tan',
        birthmark: 'Little Tail',
        ownerID: [0],
        groupID: [0],
    },
    {
        name: 'Tut',
        birthday: 04/17/3025,
        species: 'Cat',
        breed: 'Sphynx',
        weight: 50.09,
        color: 'None',
        birthmark: 'Marker',
        ownerID: [0],
        groupID: [0], 
    },
    {
        name: 'Barkey',
        birthday: 04/17/3025,
        species: 'Dog',
        breed: 'Golden Retriever',
        weight: 50.09,
        color: 'Golden',
        birthMark: 'Bark',
        ownerID: [],
        groupID: [], 
    },
   
]
    const seedPets = () => Cat.bulkCreate(petData);
    
    
    module.exports = seedPets;




