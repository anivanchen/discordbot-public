module.exports = {
	name: 'help',
	description: 'Help Command',
	execute(message, args, client, Discord, logging) {
		
		var commandsDict = {
			'List of all supported commands': '\n',
			'prefix': '//',
			'help':  'Lists all supported commands. Use: //help',
			'devannouncement': '**Dev Use Only** Announces message from developer Use: //devannouncement [string]',
			'avatar': 'Shows avatar of user or mentioned Use: //avatar [@username]',
			'pingspam': 'Ping spams mentioned user x many times. Use: //pingspam [@mention] [value]',
			'confession': 'Sends a confession to #confessions. Use: //confession [string]',
			'cutie': 'You are a cutie :. Use: //cutie [@username]',
			'cutiebomb': 'Picks random role to be a cutie. Use: //cutiebomb',
			'masssend': '**Dev Use Only** Sends message to all channels associated with bot. Use: //masssend [string]',
			'fact': 'Sends your fact to #the-best-facts channel. Use: //fact [string]',
			'announce': 'Announces your announcement to #announcements channel. Use: //announce [string]',
			'8ball': '8ball time. Use: //8ball [string]',
			'choice': 'Picks random from given choices. Use: //choice [string] | [string] | ...',
			'spam': 'Spams message. Use: //spam [string]',
			'painmeter': 'Picks random value between 0 and 100 as your pain value. Use: //painmeter',
			'hashdecrypt': '**Dev Use Only** Decrypts logging hash. Use: //hashdecrypt [string]', 
			'reload': '**Dev Use Only** Reloads bot. Use: //reload'
		};
		
		for (var text in commandsDict) {
			if (sendMessage == null) {
				var sendMessage = ("**" + text + "**: " + commandsDict[text] + "\n");
			} else {
				sendMessage = (sendMessage + "**" + text + "**: " + commandsDict[text] + "\n");
			}
		}

		message.channel.send(sendMessage);
		
	},
};