module.exports = {
    name: 'thread',
    aliases: [],
    permissions: [],
    cooldowns: 10,
    description: 'Testing Threads',
    async execute(message, args, cmd, client, Discord) {
        const thread = await channel.threads.create({
            name: 'rock-paper-scissors',
            autoArchiveDuration: 60,
            type: 'private_thread',
            reason: 'ROCK, PAPER, SCISSORS, SHOOT!',
        });

        thread.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false
        });
        thread.updateOverwrite(message.author, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: true
        });
        
        const reactionMessage = await thread.send('Thank you for contacting support!');

        try{
            await reactionMessage.react(":rock:");
            await reactionMessage.react(":page_facing_up:");
            await reactionMessage.react("scissors");
        }catch(err){
            channel.send("There was an error finding the right emojis...")
            throw err;
        }

        const collector = reactionMessage.createReactionCollector();
        collector.on('collect', (reaction, user) => {
            switch (reaction.emoji.name){
                case ":rock:":
                    thread.send('ROCK');
                case ":page_facing_up:":
                    thread.send('PAPER');
                case ":scissors:":
                    thread.send('SCISSORS');
            }
        });
    }
}