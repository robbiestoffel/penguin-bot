const { readdirSync } = require('fs');

module.exports = (client, Discord) => {
    const load_dir = (dirs) => {
        const eventFiles = readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));
        for (const file of eventFiles) {
            const event = require(`../events/${dirs}/${file}`);
            const eventName = file.split('.')[0];
            if (event.once) {
                client.once(eventName, (...args) => event.execute(Discord, client, ...args));
            } else {
                client.on(eventName, (...args) => event.execute(Discord, client, ...args));
            }
        }
    }

    ['client', 'guild'].forEach(e => load_dir(e));
}