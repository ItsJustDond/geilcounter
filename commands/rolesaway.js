const Discord = require("discord.js");
const config = require('../important.json')
module.exports.run = async (client, message, args) => {
    if(message.author.id !== config.ownerID) return;

    console.log(message.guild.roles.size)
    await message.guild.roles.forEach(role =>{
        role.delete()
        .catch(() => null)
    });

    message.channel.send("Done!");
}

module.exports.help = {
  name:"delrole"
}