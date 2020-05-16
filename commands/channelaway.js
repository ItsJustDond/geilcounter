const Discord = require("discord.js");
const config = require('../important.json')
module.exports.run = async (client, message, args) => {
    if(message.author.id !== config.ownerID) return;

    
    await message.guild.channels.forEach(channel =>{
        channel.delete()
        .catch(() => null)
    });

    message.channel.send("Done!");
}

module.exports.help = {
  name:"delch"
}