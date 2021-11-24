const util = require('minecraft-server-util');

module.exports = {
    name: 'mcserver',
    aliases: ['mc'],
    cooldown: 10,
    permissions: [],
    description: 'get information about a minecraft server',
    execute(message, args, cmd, client, Discord) {
        if (!args[0]) return message.channel.send('Please enter a minecraft server ip');
        if (!args[1]) return message.channel.send('Please enter a minecraft server port');

        util.status(args[0], { port: parseInt(args[1]) }).then((response) => {
            console.log(response);
            const McEmbed = new Discord.MessageEmbed()
            .setColor('#BFCDEB')
            .setTitle('Minecraft Server Status')
            .addFields(
                { name: 'Server IP', value: `${response.host}` },
                { name: 'Online Players', value: `${response.onlinePlayers}` },
                { name: 'Max Players', value: `${response.maxPlayers}` },
                { name: 'Version', value: `${response.version}` }
            )
            .setFooter('Using Mc-server-util');

            message.channel.send({ embeds: [McEmbed] });
        }).catch((error) => {
            message.channel.send('there was a error finding this server');
            throw error;
        })
    }
}