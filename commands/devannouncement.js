module.exports = {
	name: 'devannouncement',
	description: '',
	execute(message, args, client, Discord, logging) {
		if (message.channel.type == 'dm' && message.author.id == '695729168343629844') {
			var channel = client.channels.get('816944171754455051');
			var announcement = args.join(' ')
			const devEmbed = new Discord.RichEmbed()
				.setColor('#32cd32')
				.setAuthor('Your friendly developer')
				.setDescription(announcement);
			channel.send(devEmbed);
		} else {
			message.delete();
			message.channel.send('Nice try pal')
		}
		logging.execute("Dev Announcement", message.author.username, message.createdTimestamp, client)
    
	},
};