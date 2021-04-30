const { Group } = require('../models');

const { groupData } = [   
    {
    petID: 34554,
    userID: 34433,
    isAdmin: 43344,
    }
]
const seedGroups = () => Group.bulkCreate(groupData);

module.exports = seedGroups;