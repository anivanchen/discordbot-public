module.exports = {
    name: 'hashdecrypt',
    description: '',
    execute(message, args, client, Discord, logging) {

        message.delete();
		let mykey = crypto.createDecipher('aes-128-cbc', '6dYETBYewiHn|wcJIbWGxW:rExwHXidXb=Q&pjNveXXf8m7)5H');
		let mystr = mykey.update(args[0], 'hex', 'utf8')
		mystr += mykey.final('utf8');
	
		message.channel.send(mystr)

    },
};