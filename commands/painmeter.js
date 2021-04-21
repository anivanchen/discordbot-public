module.exports = {
	name: 'painmeter',
	description: '',
	execute (message, args, client, Discord, logging) {

        var maxValues = {
			'434372264503410691': 100, // devin
			'675205644793675777': 75, // susan
			'805957583869181983': 100, // cole
			'418796229250514945': 65, // gracelyn
			'696888751560851577': 100, // sharon
			'695729168343629844': 100, // ivan
			'350110555421540353': 65, // g alt
			'820181858674278410': 75, // s alt
			'456471735534092290': 100, // i alt
		};

		for(var key in maxValues) {
			if (key === message.author.id) {
				var maxValue = maxValues[key]
			}
		}

		let painValue = Math.floor(Math.random() * (maxValue - 0) + 0);

		const painEmbed = new Discord.RichEmbed()
			.setColor('#32cd32')
			.setTitle('Pain Meter')
			.setDescription("Your pain value is: " + painValue);
		message.channel.send(painEmbed);
		logging.execute("Pain Meter", message.author.username, message.createdTimestamp, "Pain Value: " + painValue, client);

	},
};