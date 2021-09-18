const { readdirSync } = require('fs');

module.exports = (client, Discord) => {
    /*
    const loadDir = (dirs) => {
        readdirSync(`./events/${dirs}`).forEach((file) => {
            const events = readdirSync(`./events/${dirs}`).filter((file) => file.endsWith(".js"));
            for (let file of events) {
                let pull = require(`../events/${dirs}/${file}`);
                if (pull.name) {
                    client.events.set(pull.name, pull)
                } else {
                    continue;
                }
            }
        })
    }

    ['client', 'guild'].forEach(e => loadDir(e));
    */
    const load_dir = (dirs) => {
        const eventFiles = readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));
        for (const file of eventFiles) {
            console.log('file of eventFiles');
            const event = require(`../events/${dirs}/${file}`);
            const eventName = file.split('.')[0];
            if (event.once) {
                client.once(eventName, (...args) => event.execute(Discord, client, ...args));
                console.log('once');
            } else {
                client.on(eventName, (...args) => event.execute(Discord, client, ...args));
                console.log('on');
            }
        }
    }

    ['client', 'guild'].forEach(e => load_dir(e));

    console.log('end of event handler');
}