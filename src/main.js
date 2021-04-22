// Requirements

const Discord = require("discord.js");
const fs = require("fs");
const commands = "./commands";
const logging = require("./logging.js")
const constants = require("./constants.json");
const config = require("./config.json");

// Startup configuration
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`../commands/${file}`);
	client.commands.set(command.name, command);
}

const prefix = '//';
const loggingData = "";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(prefix + 'help', { name: 'to', type: 'Listening'})
})

client.on('message', message => {

    if (constants.CUTIE_LIST.some(name => message.content.toLowerCase().includes(name)) && message.author.id != '816554613817606155') {
        var number = Math.floor(Math.random() * (10 - 0) + 0);
        if (number == 1) {
            message.channel.send("Some cutie(s) were metioned. They are a cutie. :heart_eyes:");
        }
        logging.execute("Cutie List", message.author.username, message.createdTimestamp, number, client)
    }

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
	    client.commands.get(command).execute(message, args, client, Discord, logging);
    } catch (error) {
        logging.execute("**"+ error + "**", "", "", "", client);
    }

});

client.login(config.token)