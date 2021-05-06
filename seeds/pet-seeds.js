const { Pet } = require('../models');

const petData = [

    {
        name: "Ditto",
        birthday: 04/17/3025,
        speciesType: "Dog",
        breed: "Labrador",
        weight: 50.09,
        color: "Black",
        birthmark: "Brown Paws",
        groupId: 1,
        ownerId: 2,

    },
    {
        name: 'Dublin',
        birthday: 04/17/3025,
        speciesType: 'Dog',
        breed: 'Maine Coon',
        weight: 50.09,
        color: 'Brown',
        birthmark: "brown spot",
        groupId: 1,
        ownerId: 2,
       
        
    },
    {
        name: 'Dagger',
        birthday: 04/17/3025,
        speciesType: 'Dog',
        breed: 'Chihuaha',
        weight: 50.09,
        color: 'Tan',
        birthmark: "Little Tail",
        groupId: 1,
        ownerId: 2,
        
    },
    {
        name: 'Dita',
        birthday: 04/17/3025,
        speciesType: 'Dog',
        breed: 'Sphynx',
        weight: 50.09,
        color: 'None',
        birthmark: "Marker",
        groupId: 1,
        ownerId: 2,
       
       
    }
  
   
];
    const seedPets = () => Pet.bulkCreate(petData);
    
    
    module.exports = seedPets;




