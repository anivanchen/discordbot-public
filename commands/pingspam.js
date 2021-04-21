module.exports = {
    name: 'pingspam',
    description: '',
    execute(message, args, client, Discord, logging) {
        
        const victim = message.mentions.users.first();
        var max = args[1]
		var i = 1;
        if (max > 69) { max = 69 }
        do {
            message.channel.send(`Pinging ${victim} ` + i);
            i++;
        }
		while (i - 1 < max);
		logging.execute("Ping Spam", message.author.username, message.createdTimestamp, victim, client)

    },
};