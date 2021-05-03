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

// Pet to Event association
Pet.hasMany(Event, {
    foreignKey: 'pet_id',
    onDelete: 'CASCADE'
});
Event.belongsTo(Pet, {
    foreignKey: 'pet_id'
});

// Group to Pet association
Group.belongsToMany(Pet, { through: "PetGroups" });
Pet.belongsToMany(Group, { through: "PetGroups" });

// Species to Pet association
Species.hasMany(Pet, {
    foreignKey: 'pet_id',
    onDelete: 'CASCADE'
});
Pet.belongsTo(Species, {
    foreignKey: 'pet_id'
});

// Vet to Pet association
Vet.hasMany(Pet, {
    foreignKey: 'pet_id',
    onDelete: 'CASCADE'
});
Pet.belongsTo(Vet, {
    foreignKey: 'pet_id'
});

// Group to ICE association
Group.hasOne(ICE, {
    foreignKey: 'group_id',
    onDelete: 'CASCADE'
});
ICE.belongsTo(Group, {
    foreignKey: 'group_id'
});

module.exports = { User, Event, Group, ICE, Pet, Species, Vet };