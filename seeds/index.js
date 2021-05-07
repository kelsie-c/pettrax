const seedPets = require('./pet-seeds');
// const seedNotifications = require('./notification-seeds');
const seedEvents = require('./event-seeds');
const seedUsers = require('./user-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedPets();
  console.log('\n----- PETS SEEDED -----\n');

  await seedEvents();
  console.log('\n----- EVENTS SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  
  process.exit(0);

};

seedAll();