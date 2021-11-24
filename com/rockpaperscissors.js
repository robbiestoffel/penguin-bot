module.exports = {
    name: 'rockpaperscissors',
    aliases: ['rps'],
    permissions: [],
    cooldowns: 10,
    description: 'Play Rock Paper Scissors',
    async execute(message, args, cmd, client, Discord) {
        if(!args[0] || !args[1]) return message.channel.send('Please tag the two people that are playing');

        const channel = await message.guild.channels.create(`choose rock, paper, or scissors here ${message.author.tag}`);
        channel.setParent('886569387203629106');

        channel.permissionOverwrites.create(message.guild.id, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false
        });
        channel.permissionOverwrites.create(message.author, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: true
        });

        const reactionMessage = await channel.send('Thank you for contacting support!');

        try{
            
            await reactionMessage.react(":rock:");
            await reactionMessage.react(":page_facing_up:");
            await reactionMessage.react(":scissors:");
        }catch(err){
            channel.send("There was an error finding the right emojis...")
            throw err;
        }

        const collector = reactionMessage.createReactionCollector((reaction, user) =>
            message.guild.members.cache.find((member) => member.id === user.id).hasPermission('ADMINISTRATOR'),
            { dispose: true }
        );

        collector.on('collect', (reaction, user) => {
            switch (reaction.emoji.name){
                case "":
                    channel.updateOverwrite(message.author, { SEND_MESSAGES: false});
                    break;
                case "":
                    channel.send("Deleting this channel in 5 seconds!");
                    setTimeout(() => channel.delete(), 5000);
                    break;
            }
        });

        message.channel.send('We will be right with you! ${channel}').then((msg) => {
            setTimeout(() => msg.delete(), 7000);
            setTimeout(() => message.delete(), 3000);
        }).catch((err) => {
            throw err;
        });
    }
}