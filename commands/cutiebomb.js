module.exports = {
    name: 'cutiebomb',
    description: '',
    execute(message, args, client, Discord, logging) {

        const channel = client.channels.get('816944171754455051')
		message.delete();
		var victim = message.guild.roles.random()
		channel.send(victim + (' you are a cutie'))
		
		logging.execute("Cutie Bomb", message.author.username, message.createdTimestamp, victim, client)

    },
};