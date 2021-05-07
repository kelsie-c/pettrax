const { Pet } = require('../models');

const petData = [

    {
        name: "Ditto",
        birthday: 04/17/2019,
        speciesType: "Dog",
        breed: "Labrador",
        weight: 50.09,
        color: "Black",
        birthmark: "Brown Paws",
        userId: 2,
        vetName: "Dr. Charlie Brown",
    },
    {
        name: 'Dublin',
        birthday: 04/17/2020,
        speciesType: 'Dog',
        breed: 'Maine Coon',
        weight: 20.09,
        color: 'Brown',
        birthmark: "brown spot",
        userId: 2,  
        contactName: "Julie Owens",   
    },
    {
        name: 'Dagger',
        birthday: 04/17/2018,
        speciesType: 'Dog',
        breed: 'Chihuaha',
        weight: 30.09,
        color: 'Tan',
        birthmark: "Little Tail",
        userId: 2,       
    },
    {
        name: 'Dita',
        birthday: 04/17/2017,
        speciesType: 'Dog',
        breed: 'Sphynx',
        weight: 40.09,
        color: 'None',
        birthmark: "Marker",
        userId: 2,   
    }
  
   
];
    const seedPets = () => Pet.bulkCreate(petData);
    
    
    module.exports = seedPets;




