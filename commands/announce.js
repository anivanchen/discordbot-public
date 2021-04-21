module.exports = {
    name: 'announce',
    description: '',
    execute(message, args, client, Discord, logging) {

		if (message.channel.id == '721892868435869737') {
			message.delete();
			const announcementEmbed = new Discord.RichEmbed()
				.setColor('#32cd32')
				.setTitle('Announcement')
				.setAuthor(message.author.username)
				.setThumbnail(message.author.avatarURL)
            	.setDescription('@everyone ' + args.join(' '));
			message.channel.send(announcementEmbed);
		} else {
			message.delete();
			message.channel.send('Try again in #announcements channel.')
		}
		logging.execute("Announcement", message.author.username, message.createdTimestamp, args.join(' '), client)

    },
};