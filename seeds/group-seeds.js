const { Group } = require('../models');

const groupData = [   
    {
    petId: 34554,
    userId: 34433,
    isAdmin: 43344,
    }
]
const seedGroups = () => Group.bulkCreate(groupData);

module.exports = seedGroups;