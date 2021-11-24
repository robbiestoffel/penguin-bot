const profileModel = require('../../models/profileSchema');

module.exports = {
    name: 'guildMemberAdd',
    once: false,
    async execute(Discord, client, member) {
        console.log('guildMemberAdd')
        member.roles.add(member.guild.roles.cache.find(role => role.name === '🐧'));
        let profile = await profileModel.create({
            userID: member.id,
            serverID: member.guild.id,
            coins: 1000,
            bank: 0
        });
        profile.save();
    }
}

// 🐧