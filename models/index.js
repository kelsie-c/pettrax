const User = require('./User');
const Event = require('./Event');
const Pet = require('./Pet');

Pet.belongsTo(User);
User.hasMany(Pet);

module.exports = { User, Event, Pet };