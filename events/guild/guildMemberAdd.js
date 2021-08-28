const profileModel = require('../../models/profileSchema');

module.exports = async(Discord, client, member) => {
    console.log('guildMemberAdd')
    guildMember.roles.add(guildMember.guild.roles.cache.find(role => role.name === '🐧'));
    let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        coins: 1000, 
        bank: 0
    });
    profile.save();
}

// 🐧