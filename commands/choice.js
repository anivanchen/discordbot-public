module.exports = {
    name: 'choice',
    description: '',
    execute(message, args, client, Discord, logging) {
        
        let choices = args.join(' ')
		choices = choices.split(" | ")
		let choice = choices[Math.floor(Math.random() * choices.length)];
		message.channel.send(choice);
		logging.execute("Choice", message.author.username, message.createdTimestamp, choice, client)
    
    },
};