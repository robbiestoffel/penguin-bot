const fs = require('fs');

module.exports = (client, Discord) =>{
    const command_files = fs.readdirSync('./com/').filter(file => file.endsWith('.js'));
    
    for(const file of command_files){
        const command = require(`../com/${file}`);
        if(command.name){
            client.commands.set(command.name, command);
        } else {
            continue;
        }
    }
}