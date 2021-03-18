const Discord = require('discord.js');

const fs = require('fs');

const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs
    .readdirSync('./commands')
    .filter((file) => file.endsWith('.js'));

const { token, prefix } = require('./config.json');

client.once('ready', () => {
    console.log('Ready to teach JavaScript!');
});

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.cmd, command)
}

client.on('message', (message) => {
    console.log(
        `User: ${message.author.username}
    Message: ${message.content}
    Channel: ${message.channel.name} 
    Server: ${message.guild}`
    );

    if (!message.content.startsWith(prefix) || message.author.bot) return
    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift().toLowerCase()

    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName)

    try {
        command.execute(message, args)
    }
    catch (error) {
        console.error(error)
        message.channel.send(
            `${message.author} There was a error while executing this command!`
        );
    }
});

client.login(token)