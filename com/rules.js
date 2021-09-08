module.exports = {
    name: 'count',
    description: "Pastes in the Rules",
    aliases: [],
    permissions: [],
    cooldown: 5,
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#C7E3E0')
            .setTitle('Guidelines')
            .setDescription('(use common sense)')
            .addFields(
                { name: 'Be', value: 'Kind' },
                { name: 'Be', value: 'Respectful' },
                { name: 'Be', value: 'Penguin'},
                { name: 'Don\'t', value: 'Cuss'},
                { name: 'Don\'t', value: 'Spam'},
                { name: 'Don\'t', value: 'Chicken'}
            )
            .setFooter('Enjoy!');

        message.channel.send(newEmbed);
    }
}
