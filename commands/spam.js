module.exports = {
    name: 'spam',
    description: '',
    execute(message, args, client, Discord, logging) {

        if (message.channel.id == '727260792377966676') {
			message.delete();
			const msg = args.slice(1).join(' ')
        	var max = args[0]
			var i = 0;
     		if (max > 1000) { max = 1000 }
        	do {
            	message.channel.send(msg);
            	i++;
        	}
		while (i < max);
		} else {
			message.delete();
			message.channel.send("Try again in #spam");
		}
		
		logging.execute("Spam", message.author.username, message.createdTimestamp, "", client)
		
    },
};