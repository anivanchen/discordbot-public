module.exports = {
    name: 'masssend',
    description: '',
    execute(message, args, client, Discord, logging) {

        if (message.author.id === '695729168343629844') {
            message.delete();
		    client.channels.forEach(channel => {
			if(channel.type === 'text') channel.send(args.join(' ')).catch(console.error)})
            logging.execute("Mass Send", message.author.username, message.createdTimestamp, "", client)
        }
        
    },
};