const ms = require('ms');
module.exports = {
    name: 'mute',
    description: 'Mutes people on the server',
    execute(client, message, args) {
        if(message.member.roles.cache.has('844318850707488778')){
            const target = message.mentions.users.first();
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === '🐧');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
                let memberTarget = message.guild.members.cache.get(target.id);

                if (!args[1]) {
                    message.channel.send('please enter a time');
                } else {
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

                    setTimeout(function () {
                        memberTarget.roles.remove(muteRole.id);
                        memberTarget.roles.add(mainRole.id);
                    }, ms(args[1]));
                }
            } else {
                message.channel.send('Hmm, that member doesnt seem to exist...');
            }
        }
    }
}