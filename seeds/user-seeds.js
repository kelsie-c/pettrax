const { User } = require('../models');

const userData = [
    
    {
      name: "Sal McDonald",
      address: "23 cherry lane",
      email: "sal@hotmail.com",
      phone: 3306714324,
      password: "password12345",      
    },
    {
        name: 'Jerry',
        address: "27 cherry lane",
        email: "jerry@hotmail.com",
        phone: 3306714324,
        password: "password12345",
    },
    {
        name: "Bobby",
        address: "28 cherry lane",
        email: "bobby@hotmail.com",
        phone: 3306714324,
        password: "password12345",
    },
    {
        name: "Tom",
        address: "29 Cherry lane",
        email: "tom@hotmail.com",
        phone: 6144167435,
        password: "password12345",
    },

];

  const seedUsers = () => User.bulkCreate(userData);
  
  module.exports = seedUsers; 



  