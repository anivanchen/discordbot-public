module.exports = {
    name: 'avatar',
    description: '',
    execute(message, args, client, Discord, logging) {

        let user = message.mentions.users.first() || message.author;
        const avatarEmbed = new Discord.RichEmbed()
            .setColor('#32cd32')
            .setAuthor(user.username)
            .setImage(user.displayAvatarURL);
        message.channel.send(avatarEmbed);

    },
};