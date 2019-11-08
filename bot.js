const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "?"

client.on("ready", function() {
	bot.user.setActivity("?help for commands")
    console.log("Booted up!");
});

clien.login(process.env.token);
