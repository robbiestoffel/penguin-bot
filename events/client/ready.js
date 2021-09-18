module.exports = {
    name: 'ready',
    once: true,
    execute(Discord, client) {
        console.log('Gakker gakker!');
        /*
        console.log(`Logged in as ${client.user.tag}`);
        client.user.setActivity("penguins gakker!", {
        type: "LISTENING",
        });
        */
    }
}