const Discord = require('discord.js')
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord)
})

require('dotenv').config();
client.login(process.env.DISCORD_TOKEN);

/*
const fs = require('fs');
const ytdl = require('ytdl-core');
const pathToFfmpeg = require('ffmpeg-static');
const prefix = 'penguin ';
*/
/*
const commandFiles = fs.readdirSync('./com/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./com/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Gakker gakker!')
    client.user.setActivity("penguins make beautiful gakkers!", {
        type: "LISTENING",
    });
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'gakker') {
        function play(connection, message) {
            dispatcher = connection.play('./asset/snd/penguin.mp4');
            dispatcher.on('finish', function () {
                play(connection, message);
            });
        }
        message.member.voice.channel.join().then(function (connection) {
            play(connection, message);
        });
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command === 'mute') {
        client.commands.get('mute').execute(message, args);
    }
});

client.on('message', message => {
    let ran = Math.floor(Math.random() * 30)
    if (ran === 0) {
        message.channel.send("GAKKER");
    } else if (ran === 9) {
        message.channel.send("penguins are power");
    }
});

client.on('guildMemberAdd', guildMember =>{
    let role = guildMember.guild.roles.cache.find(role => role.name === '🐧');
    guildMember.roles.add(role);
});
*/