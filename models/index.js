const User = require('./User');
const Event = require('./Event');
const Pet = require('./Pet');

// Event.belongsTo(Pet, {
//     foreignKey: 'pet_id'
// });

module.exports = { User, Event, Group, ICE, Pet, Species, Vet };