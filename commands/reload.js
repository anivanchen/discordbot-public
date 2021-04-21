module.exports = {
    name: 'reload',
    description: '',
    execute(message, args, client, Discord, logging) {

        if (message.channel.type == 'dm') {
			if (message.author.id == '695729168343629844') {
				client.destroy().then(() => {
				client.login(token);
				console.log('Reloaded')
				});
			} else {
				message.delete();
				message.reply('hehe nice try but dev only :)')
			}
		
		} else {
			message.delete();
			message.reply('hehe nice try but dms only :)');
		}
        logging.execute("Reload", message.author.username, message.createdTimestamp, "", client)
        
    },
};