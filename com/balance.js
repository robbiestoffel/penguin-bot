module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    permissions: [],
    description: "Check the users balance.",
    execute(message, args, cmd, client, Discord, profileData) {
        message.channel.send(`Your wallet balance is ${profileData.coins}, your bank bal is ${profileData.bank}`);
    }
}