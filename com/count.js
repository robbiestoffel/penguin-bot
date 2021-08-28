module.exports = {
    name: 'count',
    description: "Informs you of your number of penguins",
    permissions: [],
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#304281')
            .setTitle('Rules')
            .setDescription('This is a embed for the server rules')
            .addFields(
                { name: 'Rule 1', value: 'Be nice' },
                { name: 'Rule 2', value: 'Be penguin' },
            )
            .setFooter('Make sure to check out the rules channel');

        message.channel.send(newEmbed);
    }
}
