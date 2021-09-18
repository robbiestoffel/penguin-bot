const fs = require('fs');
const { Collection } = require('discord.js');

module.exports = (client, Discord) =>{
    client.commands = new Collection();
    const commandFiles = fs.readdirSync('./com/').filter(file => file.endsWith('.js'));
    
    for(const file of commandFiles){
        const command = require(`../com/${file}`);
        if(command.name){
            client.commands.set(command.name, command);
        } else {
            continue;
        }
    }

    // console.log(client.commands); // Logs Commands
}