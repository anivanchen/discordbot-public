module.exports = {
    name: '8ball',
    description: '',
    execute(message, args, client, Discord, logging) {

		var eightball = [ 
			"yes!",
			"no...",
			"maybe?",
			"probably",
			"I don't think so.",
			"never!",
			"you can try...",
		]

		let choice = eightball[Math.floor(Math.random() * eightball.length)]
		message.channel.send(choice);
		logging.execute("8 Ball", message.author.username, message.createdTimestamp, choice, client)

    },
};