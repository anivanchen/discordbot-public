module.exports = {
	name: 'logging',
	description: '',
	// logging("", message.author.username, message.createdTimestamp, "")
	execute(command, username, timeStamp, addData, client) {

		const crypto = require("crypto");

		const d = new Date( timeStamp );
		let date = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds() + ", " + d.toDateString();

		if (addData === undefined || addData === "" || addData === null) {
			addData = ""
		}

		let loggingData = command + ": " + username + " | " + date + " | " + addData;
		let password = '6dYETBYewiHn|wcJIbWGxW:rExwHXidXb=Q&pjNveXXf8m7)5H'
		
		var mykey = crypto.createCipher('aes-128-cbc', password);
		var mystr = mykey.update(loggingData, 'utf8', 'hex')
		mystr += mykey.final('hex');
		
		client.channels.get('834241723990540349').send(mystr);

		client.channels.get('834236102008766464').send(loggingData);
	},
};