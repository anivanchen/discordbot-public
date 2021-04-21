module.exports = {
    name: 'cutie',
    description: '',
    execute(message, args, client, Discord, logging) {

        var victim = message.mentions.users.first() || message.author;
		if (message.author.bot) return;
		message.delete();
		const cutieEmbed = new Discord.RichEmbed()
			.setColor('#32cd32')
			.setTitle('Cutie Announcement')
            .setDescription(victim + " ur a cutie")
            .setImage(victim.avatarURL);
        message.channel.send(cutieEmbed);
		logging.execute("Cutie", message.author.username, message.createdTimestamp, victim, client)

    },
};