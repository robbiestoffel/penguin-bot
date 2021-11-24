module.exports = {
    name: 'kick',
    aliases: [],
    permissions: ["KICK_MEMBERS"],
    cooldowns: 10,
    description: 'Kicks members',
    async execute(message, args, cmd, client, Discord) {
        if(!args[0] | !args[1]) return message.channel.send('Who are you kicking and why are you kicking them?');
        message.mentions.users.first().kick(args[1]);
    }
}