const User = require('./User');
const Event = require('./Event');
const Pet = require('./Pet');

Pet.belongsTo(User, { foreignKey: "userId"});
User.hasMany(Pet, { foreignKey: "userId"});

Event.belongsTo(Pet, { foreignKey: "petId"});
Pet.hasMany(Event, { foreignKey: "petId"});


module.exports = { User, Event, Pet };