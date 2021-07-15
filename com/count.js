module.exports = {
    name: 'count',
    description: "Informs you of your number of penguins",
    execute(client, message, args) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#304281')
            .setTitle('Rules')
            .setDescription('This is a embed for the server rules')
            .addFields(
                { name: 'Rule 1', value: 'Be nice' },
                { name: 'Rule 2', value: 'Be penguin' },
            )
            .setImage('https://https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOBwUcarwIs2uSOqgaqx8MDi5VPbK1XIIsug&usqp=CAU')
            .setFooter('Make sure to check out the rules channel');

        message.channel.send(newEmbed);
    }
}
