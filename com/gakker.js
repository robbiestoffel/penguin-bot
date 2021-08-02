module.exports = {
    name: 'gakker',
    description: 'Makes penguin sounds',
    execute(message, args, cmd, client, Discord) {
        function play(connection, message) {
            dispatcher = connection.play('./asset/snd/penguin.mp4');
            dispatcher.on('finish', function () {
                play(connection, message);
            });
        }

        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.channel.send('You need to be in a channel to execute this command!');
        if (!message.guild.voiceConnection) message.member.voice.channel.join().then(function (connection) {
            play(connection, message);
        });
    }
}
