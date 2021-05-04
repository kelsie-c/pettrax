const User = require('./User');
const Event = require('./Event');
const Group = require('./Group');
const ICE = require('./ICE');
const Pet = require('./Pet');
const Species = require('./Species');
const Vet = require('./Vet');

// Group to User association
Group.belongsToMany(User, { through: "UserGroups" });
User.belongsToMany(Group, { through: "UserGroups" });

// Event.belongsTo(Pet, {
//     foreignKey: 'pet_id'
// });

// Group to Pet association
Group.belongsToMany(Pet, { through: "PetGroups" });
Pet.belongsToMany(Group, { through: "PetGroups" });

// Group to ICE association
// Group.hasOne(ICE, {
//     foreignKey: 'group_id',
//     onDelete: 'CASCADE'
// });

module.exports = { User, Event, Group, ICE, Pet, Species, Vet };