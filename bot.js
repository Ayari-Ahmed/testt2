const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("465773120406552579")
setInterval(function() {
channel.send(`ahmed``);
}, 30)
})

client.login(process.env.BOT_TOKEN);