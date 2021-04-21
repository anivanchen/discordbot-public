module.exports = {
    name: 'confession',
    description: '',
    execute(message, args, client, Discord, logging) {
        
        if (message.channel.type == 'dm') { 
			let channel = client.channels.get('816844344404606996')
			let image = args[0]
			if (args[0].startsWith('http')) {
				const confessionEmbed = new Discord.RichEmbed() 
					.setColor('#32cd32')
					.setTitle('Confession')
					.setImage(image);
				channel.send(confessionEmbed);
			} else {
				const confessionEmbed = new Discord.RichEmbed() 
					.setColor('#32cd32')
					.setTitle('Confession')
					.setDescription(args.join(' '));
				channel.send(confessionEmbed);
			}
		} else { 
			message.delete();
			message.author.send('Send me your confessions here. i>confession [confession]');
		}
        logging.execute("Confession", message.author.username, message.createdTimestamp, args.join(' '), client)

    },
};