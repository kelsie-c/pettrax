const seedPets = require('./pet-seeds');
const seedIces = require('./ice-seeds');
// const seedNotifications = require('./notification-seeds');
const seedEvents = require('./event-seeds');
const seedUsers = require('./user-seeds');
const seedVets = require('./vet-seeds');
const seedSpecies = require('./species-seeds');
const seedGroups = require('./group-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedPets();
  console.log('\n----- PETS SEEDED -----\n');

  await seedIces();
  console.log('\n----- ICES SEEDED -----\n');

  await seedEvents();
  console.log('\n----- EVENTS SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  
  await seedVets();
  console.log('\n----- VETS SEEDED -----\n');
  
  await seedSpecies();
  console.log('\n----- SPECIES SEEDED -----\n');

  await seedGroups();
  console.log('\n----- SPECIES SEEDED -----\n');

  
  
  process.exit(0);

};


seedAll();