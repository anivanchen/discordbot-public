module.exports = {
    name: 'fact',
    description: '',
    execute(message, args, client, Discord, logging) {

		if (message.channel.id == '818018046332895252') {
			message.delete();
			const factEmbed = new Discord.RichEmbed()
				.setColor('#32cd32')
				.setTitle('Fact')
            	.setDescription(args.join(' '));
			message.channel.send(factEmbed);
		} else {
			message.delete();
			message.channel.send('Try again in #the-best-facts channel.')
		}
		logging.execute("Fact", message.author.username, message.createdTimestamp, args.join(' '), client)

    },
};