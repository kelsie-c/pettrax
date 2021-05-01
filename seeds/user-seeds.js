const { User } = require('../models');

const userData = [
    
    {
      name: 'Sal McDonald',
      address: '23 cherry lane',
      email: 'sal@hotmail.com',
      phone: 3306714324,
      password: 'password12345',
      groupId: 5,
    },
    {
        name: 'Jerry',
        address: "27 cherry lane",
        email: "sal@hotmail.com",
        phone: 3306714324,
        password: "password12345",
        groupId: 5,
    },
    {
        name: "Bobby",
        address: "28 cherry lane",
        email: "sal@hotmail.com",
        phone: 3306714324,
        password: "password12345",
        groupId: 5,
    },
    {
        name: "Tom",
        address: "29 Cherry lane",
        email: "sal@hotmail.com",
        phone: 6144167435,
        password: "password12345",
        groupId: 5,
    },
    {
        name: "Sally",
        address: "321 Wall st.",
        email: "sal@hotmail.com",
        phone: 3425678960,
        password: "password12345",
        groupId: 5,
    },

  ];


  const seedUsers = () => User.bulkCreate(userData);
  
  module.exports = seedUsers; 



  