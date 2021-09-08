module.exports = {
    name: 'clear',
    permissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],
    description: "Clear messages!",
    async execute(message, args, cmd, client, Discord) {
        if (!args[0]) return message.reply('please enter the amount of messages that you want to clear!');
        if (isNaN(args[0])) return message.reply("please enter a real number");
        if (args[0] > 100) return message.reply("You cannot delete more than 100 messages!");
        if (args[0] < 1) return message.reply("You need to delete at least 1 message!");
        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}
