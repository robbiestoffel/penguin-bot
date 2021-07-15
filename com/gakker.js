module.exports = {
    name: 'gakker',
    description: 'Makes penguin sounds',
    execute(client, message, args) {
        console.log('Gakker Exissts');
        function play(connection, message) {
            dispatcher = connection.play('./asset/snd/penguin.mp4');
            console.log('Playing Gakker');
            dispatcher.on('finish', function () {
                play(connection, message);
                console.log('Replaying Gakker')
            });
        }
        if (!message.guild.voiceConnection) message.member.voice.channel.join().then(function (connection) {
            play(connection, message);
            console.log('Summoning Gakker');
        });
    }
}
